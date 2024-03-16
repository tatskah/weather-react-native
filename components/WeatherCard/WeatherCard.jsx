import { useState } from "react";
import { View, Text, Pressable, Image, SwitchBase } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './weathercard.style';
import { WeatherType, WeatherText } from '../../utils/WeatherConditions';
import { MAIN_COLORS } from "../../constants";
import { format } from 'date-fns';

const WeatherCard = ({ item, navigation }) => {
    const [data, setData] = useState(item);
    const [currentDateTime, setCurrentDateTime] = useState(format(new Date(), 'dd.MM.yyyy HH:mm'))
    return (
        <View key={item.idx} styles={styles.container}>

            <View style={currentDateTime > item.time ? styles.card_passed : styles.card}>
                <View style={{ flex: 3 }}>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
                        <Text style={[styles.item_text_color, { flex: 3, fontWeight: "900" }]}>{item.time}</Text>
                        <Text style={[styles.item_text_color, { flex: 2, textAlign: "right" }]}>{item.temperature} &deg;C</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start" }}>
                        <Text style={[styles.item_text_color, { flex: 3 }]}>{WeatherText(item.weather_code)}</Text>
                        {/* <Text style={[styles.item_text_color, { flex: 2, textAlign: "right" }]}>Sade: {currentDateTime}</Text> */}
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center", paddingTop: 2 }}>
                    <MaterialCommunityIcons
                        size={30}
                        name={WeatherType(item.weather_code)}
                        color={MAIN_COLORS.row_item_forecolor}
                    />
                </View>
            </View>


        </View>
    );
}
export default WeatherCard;