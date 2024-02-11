import { useEffect, useState } from "react";
import { Text, View, Pressable, Image, FlatList, ActivityIndicator } from "react-native";
import Event from '../Event/Event'
import mainStyles from '../../styles';
import styles from './events.style'
import { icons } from '../../constants';
import EventService from '../../services/events.service';

const Events = ({ navigation }) =>
{
    const [data, setData] = useState([]);

    useEffect(() =>
    {
        const unsubscribe = navigation.addListener('focus', () =>
        {
            getData();
        });
    }, [navigation])

    const getData = async () =>
    {
        const response = await EventService.getEvents();
        // console.log(response.data);
        setData(response.data);
    }

    const renderItem = ({ item }) => (
        <View>
            <Event navigation={navigation} key={`item-${item.id}`} item={item} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={mainStyles.appHeader}>
                <Text style={mainStyles.appHeaderText}>Tapahtumat - {data.length} kpl.</Text>

                <View style={{ flex: 1, }}>
                    <Pressable onPress={() => navigation.navigate('EventForm', { id: 0 })}>
                        <Image source={icons.new2} style={styles.new_icon} />
                    </Pressable>
                </View>
            </View>

            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (!data.length ?
                        <View style={styles.indicator}>
                            <ActivityIndicator size="large" color="#FCB419" />
                        </View>
                        : null)}
                />
            </View>

        </View>
    );

};

export default Events;