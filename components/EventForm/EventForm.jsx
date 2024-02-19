import { Text, View, TextInput, SafeAreaView, ScrollView, Pressable } from "react-native";
import { useEffect, useState } from "react";
import mainStyles from '../../styles/';
import styles from './eventform.style';
import EventsService from "../../services/events.service";
import { format } from 'date-fns';
import CalendarPicker from "react-native-calendar-picker";

// import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown'

import { MAIN_COLORS } from "../../constants";
import WeatherTypes from "../../utils/WeatherTypes";
import { Button } from "react-native-web";

const EventForm = ({ route, navigation }) => {
    const { id } = route.params;
    const [addDate, setAddDate] = useState(Date.now());
    const [calDate, setCalDate] = useState();
    const [info, setInfo] = useState('');
    const [weathertypes, setWeatherTypes] = useState(WeatherTypes.WeatherTypesArr);

    const [tempMorning, setTempMorning] = useState('0');
    const [tempMiddle, setTempMiddle] = useState('0');
    const [tempEvening, setTempEvening] = useState('0');

    const [weatherTypeMorning, setWeatherTypeMorning] = useState(0);
    const [weatherTypeMiddle, setWeatherTypeMiddle] = useState(0);
    const [weatherTypeEvening, setWeatherTypeEvening] = useState(0);

    const [isLoading, setIsLoading] = useState('');

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getData();
        });
        return unsubscribe;
    })


    const getData = async () => {
        setIsLoading(true);
        try {
            const response = await EventsService.getEventById(id);
            const data = response.data;
            await setValues(data, 1);
        } catch (error) {
            await setValues([], 0);
        }
    }

    const setValues = async (data, mode) => {
        if (mode === 1) {
            setAddDate(data.add_date);
            setInfo(data.info);
            setTempMorning(data.temp_morning.toString());
            setTempMiddle(data.temp_middle.toString());
            setTempEvening(data.temp_evening.toString());
            setWeatherTypeMorning(data.wtype_morning);
            setWeatherTypeMiddle(data.wtype_middle);
            setWeatherTypeEvening(data.wtype_evening);
        } else {
            setAddDate(Date.now());
            setInfo('');
            setTempMorning('');
            setTempMiddle('');
            setTempEvening('');
            setWeatherTypeMorning('0');
            setWeatherTypeMiddle('0');
            setWeatherTypeEvening('0');
        }
        setIsLoading(false);

    };

    const handleTextChange = (inputText, dayTime) => {
        if (/^-?\d*\.?\d*$/.test(inputText)) {
            if (dayTime === "morning") setTempMorning(inputText);
            if (dayTime === "middle") setTempMiddle(inputText);
            if (dayTime === "evening") setTempEvening(inputText);
        }
    };

    const addEvent = async () => {
        const data = {
            add_date: new Date(addDate),
            info: info,
            temp_morning: parseInt(tempMorning),
            temp_middle: parseInt(tempMiddle),
            temp_evening: parseInt(tempEvening),
            wtype_morning: parseInt(weatherTypeMorning),
            wtype_middel: parseInt(weatherTypeMiddle),
            wtype_evening: parseInt(weatherTypeEvening),
        }
        const saveData = await EventsService.addEvent(data);

        console.log(data);
        console.log(saveData);
    }
    const updateEvent = () => {
        console.log("update");
    }



    return (

        <View style={mainStyles.container}>
            <View style={mainStyles.appHeader}>
                <Text style={mainStyles.appHeaderText}>Lisää tapahtuma:  {addDate ? format(addDate, 'dd.MM.yyyy') : ''}</Text>
            </View>
            <View style={styles.content}>
                <ScrollView>
                    <View style={{ alignContent: "center", backgroundColor: MAIN_COLORS.container_background }}>
                        <CalendarPicker
                            startFromMonday={true}
                            // scrollable={true}
                            scaleFactor={450}
                            // width={320}
                            // selectedStartDate={new Date(2003, 12, 12).getTime()}

                            onDateChange={(date) => setAddDate(date)}
                            selectedDayColor={MAIN_COLORS.header_tab_forecolor}
                            textStyle={{ color: MAIN_COLORS.row_item_forecolor }}
                            previousTitle="Edellinen"
                            nextTitle="Seuraava"
                            weekdays={["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"]}
                            months={['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kesä', 'Heinä', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu']}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        value={addDate ? format(addDate, 'dd.MM.yyyy HH:ss') : ''}
                        editable={false}
                        onChangeText={(text) => addDate ? setAddDate(text) : ''}
                    />
                    <View style={{ flex: 4, flexDirection: "column", minHeight: 150 }}>
                        <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 6 }}>Info:</Text>
                        <TextInput
                            style={[styles.input_multiline, { flex: 1, textAlignVertical: "top" }]}
                            multiline={true}
                            value={info}
                            onChangeText={(text) => setInfo(text)}
                        />
                    </View>
                    {/* TEXT FIELDS */}
                    <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start", margin: 4 }}>
                        <View style={{ flex: 1, flexDirection: "column", }} >
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 6 }}>Aamupäivä:</Text>
                            <TextInput
                                style={[styles.input, { textAlign: "center" }]}
                                value={tempMorning}
                                keyboardType="numeric"
                                onChangeText={(inputText) => handleTextChange(inputText, 'morning')}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }} >
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 6 }}>Keskipäivä:</Text>
                            <TextInput
                                style={[styles.input, { textAlign: "center" }]}
                                value={tempMiddle}
                                keyboardType="numeric"
                                onChangeText={(inputText) => handleTextChange(inputText, 'middle')}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }} >
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 6 }}>Iltapäivä:</Text>
                            <TextInput
                                style={[styles.input, { textAlign: "center" }]}
                                value={tempEvening}
                                keyboardType="numeric"
                                onChangeText={(inputText) => handleTextChange(inputText, 'evening')}
                            />
                        </View>
                    </View>
                    {/* SELECT FIELDS */}
                    <View style={{ flex: 1, paddingTop: 24, flexDirection: "row", margin: 4 }}>
                        <View style={{ flex: 1, flexDirection: "column", }}>
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 2 }}>Aamupäivä:</Text>
                            <SelectDropdown buttonStyle={{ width: "auto", marginHorizontal: 2, marginTop: 4, backgroundColor: MAIN_COLORS.header_tab_background, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor, borderRadius: 4, height: 40 }}
                                buttonTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14 }}
                                dropdownStyle={{ backgroundColor: MAIN_COLORS.row_item_background, padding: 2, marginRight: 2, borderRadius: 6, borderWidth: 2, borderColor: MAIN_COLORS.row_item_bordercolor }}
                                rowTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6 }}
                                selectedRowStyle={{ backgroundColor: MAIN_COLORS.header_tab_background }}
                                data={weathertypes}
                                defaultValueByIndex={weatherTypeMorning}
                                defaultButtonText={"Valitse sää"}
                                onSelect={(selectedItem, index) => { setWeatherTypeMorning(index) }}
                                buttonTextAfterSelection={(selectedItem, index) => { return selectedItem }}
                                rowTextForSelection={(item, index) => { return item }}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: "column", }}>
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 2 }}>Keskipäivä:</Text>
                            <SelectDropdown buttonStyle={{ width: "auto", marginHorizontal: 2, marginTop: 4, backgroundColor: MAIN_COLORS.header_tab_background, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor, borderRadius: 4, height: 40 }}
                                buttonTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, }}
                                dropdownStyle={{ backgroundColor: MAIN_COLORS.row_item_background, padding: 2, marginRight: 2, borderRadius: 6, borderWidth: 2, borderColor: MAIN_COLORS.row_item_bordercolor }}
                                rowTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6 }}
                                selectedRowStyle={{ backgroundColor: MAIN_COLORS.header_tab_background }}
                                data={weathertypes}
                                defaultValueByIndex={weatherTypeMiddle}
                                defaultButtonText={"Valitse sää"}
                                onSelect={(selectedItem, index) => { setWeatherTypeMiddle(index) }}
                                buttonTextAfterSelection={(selectedItem, index) => { return selectedItem }}
                                rowTextForSelection={(item, index) => { return item }}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: "column", }}>
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 2 }}>Iltapäivä:</Text>
                            <SelectDropdown buttonStyle={{ width: "auto", marginHorizontal: 2, marginTop: 4, backgroundColor: MAIN_COLORS.header_tab_background, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor, borderRadius: 4, height: 40 }}
                                buttonTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14 }}
                                dropdownStyle={{ backgroundColor: MAIN_COLORS.row_item_background, padding: 2, marginRight: 2, borderRadius: 6, borderWidth: 2, borderColor: MAIN_COLORS.row_item_bordercolor }}
                                rowTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6 }}
                                selectedRowStyle={{ backgroundColor: MAIN_COLORS.header_tab_background }}
                                data={weathertypes}
                                defaultValueByIndex={weatherTypeEvening}
                                defaultButtonText={"Valitse sää"}
                                onSelect={(selectedItem, index) => { setWeatherTypeEvening(index) }}
                                buttonTextAfterSelection={(selectedItem, index) => { return selectedItem }}
                                rowTextForSelection={(item, index) => { return item }}
                            />
                        </View>
                    </View>

                    <View style={{ flex: 1, paddingTop: 4, flexDirection: "row", margin: 4 }}>
                        <Pressable
                            style={[styles.input, { flex: 3 }]}
                            onPress={id > 0 ? updateEvent : addEvent}
                        >

                            <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Tallenna</Text>
                        </Pressable>
                    </View>

                </ScrollView>
            </View >
        </View >


    );

    const pickerSelectStyles = StyleSheet.create({
        inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 4,
            color: '#FFF',
            paddingRight: 30 // to ensure the text is never behind the icon
        },
        inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: MAIN_COLORS.row_item_bordercolor,
            borderRadius: 8,
            color: '#FFF',
            minHeight: 40,
            backgroundColor: MAIN_COLORS.row_item_background,
            paddingRight: 30 // to ensure the text is never behind the icon
        }
    });

}

export default EventForm;