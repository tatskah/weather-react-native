import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./event.style";
import { format } from 'date-fns';

const Event = ({ item, navigation }) =>
{
    const [data, setData] = useState(item);
    // console.log(data);
    return (
        <Pressable
            onPress={() => navigation.navigate('EventForm', { id: item.id })} style={styles.container}
        >
            <View >
                <View style={styles.weather_title}>
                    <Text style={styles.date_add}>{format(item.add_date, 'dd.MM.yyyy')} </Text>

                    <Text style={styles.temp_morning}>{item.temp_morning} </Text>
                    <Text style={styles.temp_middle}>{item.temp_middle} </Text>
                    <Text style={styles.temp_evening}>{item.temp_evening} </Text>
                </View>

                <View style={styles.weather_row}>
                    <Text style={styles.weather_row_info}>{item.info}</Text>
                </View>

            </View>
        </Pressable>

    );




}
export default Event;