import { useState } from "react";
import { Text, View, Pressable, Image } from "react-native";
import styles from "./event.style";
import { format } from 'date-fns';
import { MAIN_COLORS, icons } from '../../constants';
import EventsService from "../../services/events.service";
import WeatherTypes from "../../utils/WeatherTypes";
import DataHelper from '../../utils/DataHelper';
import ConfirmForm from "../ConfirmForm/ConfirmForm";

const Event = ({ item, navigation, reloadData }) => {
    const [data, setData] = useState(item);
    const [showConfirmForm, setShowConfirmForm] = useState(false);

    const deleteEvent = () => {
        try {
            const ret = EventsService.deleteEvent(data.id);
            reloadData();
        } catch (error) {
            console.log(error);
        }
    }

    const handleButtonPressed = (action) => {
        if (action) {
            deleteEvent();
        }
        setShowConfirmForm(false);
    }

    const askDeleting = () => {
        setShowConfirmForm(true);
    }

    return (
        <Pressable
            onPress={() => navigation.navigate('EventForm', { id: data.id })} style={styles.container}
        >
            <View >
                <View style={styles.weather_title}>
                    <Text style={styles.date_add}>{format(item.add_date, ' dd.MM.yyyy')} </Text>
                    <View style={{ width: 40, marginRight: 24, flexDirection: "row" }}>
                        <Text style={styles.temp_morning}>{item.temp_morning} </Text>
                        <Image style={{ width: 18, height: 18, marginLeft: 4, marginTop: 1 }} source={WeatherTypes.WeatherTypes[DataHelper.NullToImageIndex(item.wtype_morning)].image} />
                    </View>

                    <View style={{ width: 40, marginRight: 24, flexDirection: "row" }}>
                        <Text style={styles.temp_middle}>{item.temp_middle} </Text>
                        <Image style={{ width: 18, height: 18, marginLeft: 4, marginTop: 1 }} source={WeatherTypes.WeatherTypes[DataHelper.NullToImageIndex(item.wtype_middle)].image} />
                    </View>

                    <View style={{ width: 40, marginRight: 24, flexDirection: "row" }}>
                        <Text style={styles.temp_evening}>{item.temp_evening} </Text>
                        <Image style={{ width: 18, height: 18, marginLeft: 4, marginTop: 1 }} source={WeatherTypes.WeatherTypes[DataHelper.NullToImageIndex(item.wtype_evening)].image} />
                    </View>

                    {item.EventsPhotos.length > 0 ?
                        <View style={{ borderRadius: 2, borderColor: MAIN_COLORS.header_tab_forecolor, borderWidth: 1, width: 40, marginRight: 8, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ flex: 1, fontSize: 12, color: MAIN_COLORS.header_tab_forecolor, marginRight: 0 }}>{item.EventsPhotos.length}</Text>
                            <Image source={icons.photo} style={styles.photoIcon} />
                        </View>
                        :
                        <Text style={{ width: 48 }}></Text>
                    }


                    <Pressable onPress={askDeleting}>
                        <Image source={icons.delete3} style={styles.deleteIcon} />
                    </Pressable>
                </View>
                <View style={styles.weather_row}>
                    <Text style={styles.weather_row_info}>{item.info}</Text>
                </View>
                <View>
                    <ConfirmForm
                        showDialog={showConfirmForm}
                        handleButtonPressed={handleButtonPressed}
                        title={"Tapahtuman poisto"}
                        description={`Haluatko varmasti poistaa tapahtuman päivältä ${format(item.add_date, ' dd.MM.yyyy')} ?`}
                        onCancel={() => setShowConfirmForm(false)}
                    />
                </View>
            </View>
        </Pressable >

    );
}
export default Event;