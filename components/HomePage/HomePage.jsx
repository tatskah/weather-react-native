import { useEffect, useState } from "react";
import { Text, View, FlatList, ActivityIndicator } from "react-native";
import mainStyles from '../../styles';
import styles from './homepage.style';
import WeatherService from "../../services/weather.service";
import { format } from 'date-fns';
import WeatherCard from '../WeatherCard/WeatherCard';

const HomePage = ({ navigation }) =>
{
    const [dailyData, setDailyData] = useState([]);
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();

    useEffect(() =>
    {
        const unsubscribe = navigation.addListener('focus', () =>
        {
            getWeatherData();
        });
        return unsubscribe;
    }, [navigation])

    const getWeatherData = async () =>
    {
        let ret_data = [];
        let lat = 0;
        let lng = 0;

        try
        {
            navigator.geolocation.getCurrentPosition(
                async position =>
                {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    setLat(lat.toFixed(2));
                    setLng(lng.toFixed(2));
                    ret_data = await WeatherService.getWeatherData(lat, lng);
                    createData(ret_data);
                }
            )
        } catch (error)
        {
            console.log(error);
        }
    }

    const createData = async (data) =>
    {
        let daily_data;
        let items = [{}];
        let idx = 0;
        try
        {
            const daily = data.data.daily.time;
            const hourly = data.data;

            await daily.forEach(day =>
            {
                idx++;
                daily_data = hourly.hourly.time
                    .map((item, index) =>
                    {
                        if (item === day + 'T00:00'
                            || item === day + 'T04:00'
                            || item === day + 'T08:00'
                            || item === day + 'T12:00'
                            || item === day + 'T16:00'
                            || item === day + 'T20:00')
                        {
                            return {
                                'time': format(hourly.hourly.time[index], 'dd.MM.yyyy HH:mm'),
                                'temperature': hourly.hourly.temperature_2m[index],
                                'weather_code': hourly.hourly.weather_code[index],
                                'rain': hourly.hourly.rain[index],
                                'idx': index + idx
                            }
                        } else
                        {
                            return null;
                        }
                    }).filter(items => items != null);

                if (items.length < 2)
                {
                    items = daily_data;
                } else
                {
                    items = items.concat(daily_data);
                }
            });
        } catch (error)
        {
            prt(error);
            return [];
        }
        setDailyData(items);
    }

    const renderItem = ({ item }) => (
        <View>
            <WeatherCard key={`item-${item.idx}`} navigation={navigation} item={item} />
        </View>
    );

    const prt = (msg) => { console.log(msg); }

    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.appHeader}>
                <Text style={mainStyles.appHeaderText}>Viikon sää <Text style={{ flex: 1, paddingLeft: 70, fontSize: 11 }}>Lat: {lat} Lng: {lng}</Text></Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={dailyData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.idx}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (!dailyData.length ?
                        <View style={styles.indicator}>
                            <ActivityIndicator size="large" color="#FCB419" />
                        </View>
                        : null)}
                />
            </View>
        </View >
    );
}

export default HomePage;