import { useState } from "react";
import { Text, View, Pressable, Image } from "react-native";
import styles from "./event.style";
import { format } from 'date-fns';
import { icons } from '../../constants';
import EventsService from "../../services/events.service";

const Event = ({ item, navigation, handleItemDelete }) => {
    const [data, setData] = useState(item);

    const deleteEvent = () => {
        try {
            const ret = EventsService.deleteEvent(data.id);
            handleItemDelete();
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Pressable
            onPress={() => navigation.navigate('EventForm', { id: data.id })} style={styles.container}
        >
            <View >
                <View style={styles.weather_title}>
                    <Text style={styles.date_add}>{format(item.add_date, ' dd.MM.yyyy')} </Text>
                    <Text style={styles.temp_morning}>{item.temp_morning} </Text>
                    <Text style={styles.temp_middle}>{item.temp_middle} </Text>
                    <Text style={styles.temp_evening}>{item.temp_evening} </Text>
                    <Pressable onPress={deleteEvent}>
                        <Image source={icons.delete3} style={styles.deleteIcon} />
                    </Pressable>
                </View>
                <View style={styles.weather_row}>
                    <Text style={styles.weather_row_info}>{item.info}</Text>
                </View>
            </View>
        </Pressable>

    );
}
export default Event;