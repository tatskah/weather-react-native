import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./event.style";
import { format } from 'date-fns';

const Event = ({ item, navigation }) =>
{
    const [data, setData] = useState(item);

    return (
        <Pressable
            onPress={() => navigation.navigate('EventForm', { id: item.id })} style={styles.container}
        >
            <View style={{ flex: 1, justifyContent: "space-between", width: "100%", flexDirection: "column" }}>
                <View style={styles.item_title}>
                    <Text style={styles.info}>{format(item.add_date, 'dd.MM.yyyy')} </Text>
                </View>

                <View style={styles.weather_row}>
                    <Text style={styles.weather_row_item}>{item.info}</Text>
                </View>

            </View>
        </Pressable>

    );




}
export default Event;