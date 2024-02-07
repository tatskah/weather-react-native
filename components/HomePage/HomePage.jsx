import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import mainStyles from '../../styles';
import WeatherService from "../../services/weather.service";
import { format } from 'date-fns';

const HomePage = ({ navigation }) =>
{
    const [data, setData] = useState();

    useEffect(() =>
    {
        const unsubscribe = navigation.addListener('focus', () =>
        {
            getWeatherData();
        });
    }, [navigation])

    const getWeatherData = async () =>
    {

        const ret_data = await WeatherService.getWeatherData(68.10, 28.14);
        console.log(ret_data);

    }


    return (
        <View style={mainStyles.container}>
            <View style={mainStyles.appHeader}>
                <Text style={mainStyles.appHeaderText}>Etusivu</Text>
            </View>
        </View>

    );


}

export default HomePage;