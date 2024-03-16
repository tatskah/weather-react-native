import { Text, View, TextInput, ScrollView, Pressable, Image, Dimensions } from "react-native";
import { useEffect, useState, useRef } from "react";
import mainStyles from '../../styles/';
import styles from './eventform.style';
import { icons } from '../../constants';
import EventsService from "../../services/events.service";
import { format } from 'date-fns';
import CalendarPicker from "react-native-calendar-picker";
import SelectDropdown from 'react-native-select-dropdown'
import { MAIN_COLORS } from "../../constants";
import WeatherTypes from "../../utils/WeatherTypes";
import { PhotoStatus } from "../../utils/WeatherEnums";
import ModalPopup from "../ModalPopup/ModalPopup";
import DataHelper from '../../utils/DataHelper';
import WeatherCamera from "../WeatherCamera/WeatherCamera";
import PhotoCarousel from "../PhotoCarousel/PhotoCarousel";
import _ from 'lodash';

const EventForm = ({ route, navigation }) => {
    const { id } = route.params;

    const [addDate, setAddDate] = useState(Date.now());
    const [calDate, setCalDate] = useState();
    const [info, setInfo] = useState('');
    const [weathertypes, setWeatherTypes] = useState(WeatherTypes.WeatherTypes);

    const [tempMorning, setTempMorning] = useState('');
    const [tempMiddle, setTempMiddle] = useState('');
    const [tempEvening, setTempEvening] = useState('');

    const [weatherTypeMorning, setWeatherTypeMorning] = useState(0);
    const [weatherTypeMiddle, setWeatherTypeMiddle] = useState(0);
    const [weatherTypeEvening, setWeatherTypeEvening] = useState(0);

    const [eventPhotos, setEventPhotos] = useState([]);
    const [photoUri, setPhotoUri] = useState('');

    const [showModal, setShowModal] = useState(false);
    const [showCamera, setShowCamera] = useState(false);

    const [upd, setUpd] = useState(0);

    const scrollViewRef = useRef();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            if (id > 0) {
                getData();
            } else {
                resetForm();
            }
            scrollTop();
        });
        return unsubscribe;
    })

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            resetForm();
        });
        return unsubscribe;
    });

    const scrollTop = () => {
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }

    const scrollBottom = () => {
        const { height } = Dimensions.get('window');
        scrollViewRef.current.scrollTo({ y: height, animated: true });
    }

    const getData = async () => {
        try {

            const response = await EventsService.getEventById(id);
            const data = response.data;

            await setValues(data, 1);
        } catch (error) {
            console.log(error);
            await setValues([], 0);
        }
    }

    const viewCamera = () => {
        setShowCamera(true);
        scrollBottom();
    }

    const setValues = async (data, mode) => {
        if (mode === 1 && id > 0) {
            setAddDate(data.add_date);
            setInfo(data.info);
            setTempMorning(DataHelper.NullToStr(data.temp_morning).toString());
            setTempMiddle(DataHelper.NullToStr(data.temp_middle).toString());
            setTempEvening(DataHelper.NullToStr(data.temp_evening).toString());
            setWeatherTypeMorning(data.wtype_morning);
            setWeatherTypeMiddle(data.wtype_middle);
            setWeatherTypeEvening(data.wtype_evening);
            setPhotoUri(DataHelper.NullToStr(data.photoUri).toString())
            setEventPhotos(data.EventsPhotos.length > 0 ? data.EventsPhotos : []);
        } else {
            resetForm();
        }
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
            photoUri: photoUri,
            EventsPhotos: eventPhotos
        }
        const saveData = await EventsService.addEvent(data);

        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 2000);

        setTimeout(() => {
            navigation.navigate("Events");
        }, 2500);

    };

    const updateEvent = () => {
        const data = {
            add_date: addDate,
            info: info,
            temp_morning: tempMorning === "" ? null : tempMorning,
            temp_middle: tempMiddle === "" ? null : tempMiddle,
            temp_evening: tempEvening === "" ? null : tempEvening,
            wtype_morning: weatherTypeMorning,
            wtype_middle: weatherTypeMiddle,
            wtype_evening: weatherTypeEvening,
            photoUri: photoUri,
            daytime_id: 1,
            weathertype_id: 1,
            EventsPhotos: eventPhotos
        }
        const ret = EventsService.updateEvent(id, data);

        setShowCamera(false);

        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
        }, 2000);

        setTimeout(() => {
            navigation.navigate("Events");
        }, 2200);
    };

    const photoUriUpd = useRef(
        _.debounce(async (uri) => {
            setPhotoUri(uri);
        }, 100)
    ).current

    const handleEventPhotos = async (uri, status) => {
        const photo = {
            event_id: id,
            uri: uri,
            status: status
        };

        let updatedPhotos = eventPhotos;
        updatedPhotos.push(photo);

        setEventPhotos(updatedPhotos);
        scrollBottom();
        await photoUriUpd(uri);
    }

    const cancelForm = () => {
        resetForm();
        navigation.navigate("Events");
    }
    const resetForm = () => {
        setAddDate(Date.now());
        setInfo('');
        setTempMorning('');
        setTempMiddle('');
        setTempEvening('');
        setWeatherTypeMorning('0');
        setWeatherTypeMiddle('0');
        setWeatherTypeEvening('0');
        setPhotoUri('');
        setEventPhotos([]);
        setShowCamera(false);
    };

    return (

        <View style={mainStyles.container}>
            <View style={mainStyles.appHeader}>
                <Text style={mainStyles.appHeaderText}>{id > 0 ? 'Muokkaa:' : 'Lisää tapahtuma:'}  {addDate ? format(addDate, 'dd.MM.yyyy') : ''}</Text>
                <Pressable onPress={viewCamera}>
                    <Image style={styles.camera_icon} source={icons.camera_thick} />
                </Pressable>
            </View>
            <View style={styles.content}>
                <ScrollView ref={scrollViewRef}>
                    <View style={{ alignContent: "center", backgroundColor: MAIN_COLORS.row_item_background }}>
                        <CalendarPicker
                            startFromMonday={true}
                            // scrollable={true}
                            scaleFactor={450}

                            // selectedStartDate={new Date(2003, 2, 2)}
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
                        style={[styles.input, { margin: 6, paddingLeft: 10 }]}
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
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }}>
                                Aamupäivä: <Image source={WeatherTypes.WeatherTypes[DataHelper.NullToImageIndex(weatherTypeMorning)].image} style={{ width: 18, height: 18 }} />
                            </Text>
                            <TextInput
                                style={[styles.input, { textAlign: "center" }]}
                                value={tempMorning}
                                keyboardType="numeric"
                                onChangeText={(inputText) => handleTextChange(inputText, 'morning')}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }} >
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }}>
                                Keskipäivä: <Image source={WeatherTypes.WeatherTypes[DataHelper.NullToImageIndex(weatherTypeMiddle)].image} style={{ width: 18, height: 18 }} />
                            </Text>
                            <TextInput
                                style={[styles.input, { textAlign: "center" }]}
                                value={tempMiddle}
                                keyboardType="numeric"
                                onChangeText={(inputText) => handleTextChange(inputText, 'middle')}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: "column" }} >
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }}>
                                Iltapäivä: <Image source={WeatherTypes.WeatherTypes[DataHelper.NullToImageIndex(weatherTypeEvening)].image} style={{ width: 18, height: 18 }} />
                            </Text>
                            <TextInput
                                style={[styles.input, { textAlign: "center" }]}
                                value={tempEvening}
                                keyboardType="numeric"
                                onChangeText={(inputText) => handleTextChange(inputText, 'evening')}
                            />
                        </View>
                    </View>
                    {/* SELECT FIELDS */}
                    <View style={{ flex: 1, paddingTop: 10, flexDirection: "row", margin: 4 }}>
                        <View style={{ flex: 1, flexDirection: "column", }}>
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }}>Aamupäivä:</Text>
                            <SelectDropdown buttonStyle={{ width: "auto", marginHorizontal: 2, marginTop: 4, backgroundColor: MAIN_COLORS.header_tab_background, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor, borderRadius: 4, height: 40 }}
                                dropdownIconPosition={'left'}
                                buttonTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14 }}
                                dropdownStyle={{ backgroundColor: MAIN_COLORS.row_item_background, padding: 2, marginRight: 2, borderRadius: 6, borderWidth: 2, borderColor: MAIN_COLORS.row_item_bordercolor }}
                                rowTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6, paddingTop: 12, height: 40 }}
                                selectedRowStyle={{ backgroundColor: MAIN_COLORS.header_tab_background }}
                                data={weathertypes}
                                defaultValueByIndex={weatherTypeMorning}
                                defaultButtonText={"Valitse sää"}
                                onSelect={(selectedItem, index) => { setWeatherTypeMorning(index) }}
                                buttonTextAfterSelection={(selectedItem, index) => { return selectedItem.label }}
                                rowTextForSelection={(item, index) => { return item.label }}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: "column", }}>
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }}>Keskipäivä:</Text>
                            <SelectDropdown buttonStyle={{ width: "auto", marginHorizontal: 2, marginTop: 4, backgroundColor: MAIN_COLORS.header_tab_background, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor, borderRadius: 4, height: 40 }}
                                buttonTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, }}
                                dropdownStyle={{ backgroundColor: MAIN_COLORS.row_item_background, padding: 2, marginRight: 2, borderRadius: 6, borderWidth: 2, borderColor: MAIN_COLORS.row_item_bordercolor }}
                                rowTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6, paddingTop: 12, height: 40 }}
                                selectedRowStyle={{ backgroundColor: MAIN_COLORS.header_tab_background }}
                                data={weathertypes}
                                defaultValueByIndex={weatherTypeMiddle}
                                defaultButtonText={"Valitse sää"}
                                onSelect={(selectedItem, index) => { setWeatherTypeMiddle(index) }}
                                buttonTextAfterSelection={(selectedItem, index) => { return selectedItem.label }}
                                rowTextForSelection={(item, index) => { return item.label }}
                            />
                        </View>

                        <View style={{ flex: 1, flexDirection: "column", }}>
                            <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }}>Iltapäivä:</Text>
                            <SelectDropdown buttonStyle={{ width: "auto", marginHorizontal: 2, marginTop: 4, backgroundColor: MAIN_COLORS.header_tab_background, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor, borderRadius: 4, height: 40 }}
                                buttonTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14 }}
                                dropdownStyle={{ backgroundColor: MAIN_COLORS.row_item_background, padding: 2, marginRight: 2, borderRadius: 6, borderWidth: 2, borderColor: MAIN_COLORS.row_item_bordercolor }}
                                rowTextStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6, paddingTop: 12, height: 40 }}
                                selectedRowStyle={{ backgroundColor: MAIN_COLORS.header_tab_background }}
                                data={weathertypes}
                                defaultValueByIndex={weatherTypeEvening}
                                defaultButtonText={"Valitse sää"}
                                onSelect={(selectedItem, index) => { setWeatherTypeEvening(index) }}
                                buttonTextAfterSelection={(selectedItem, index) => { return selectedItem.label }}
                                rowTextForSelection={(item, index) => { return item.label }}
                            // renderCustomizedRowChild={(item, index) => {
                            //     return (
                            //         <View style={{ flex: 1, flexDirection: "row", alignContent: "space-around" }}>
                            //             <Image source={item.image} style={styles.dropdownRowImage} />
                            //             <Text style={{ alignSelf: "flex-start", flex: 2, color: MAIN_COLORS.row_item_forecolor, fontSize: 14, padding: 6 }}>{item.label}</Text>
                            //         </View>
                            //     );
                            // }}
                            />

                        </View>
                    </View>

                    {eventPhotos.length > 0 ?
                        <View>
                            <PhotoCarousel eventPhotos={eventPhotos} />
                        </View>
                        :
                        undefined
                    }
                    {showCamera ?
                        <View style={{
                            marginLeft: 6,
                            marginTop: 14, borderWidth: 1,
                            borderRadius: 4,
                            borderColor: MAIN_COLORS.header_tab_forecolor,
                            // alignSelf: "center",
                            width: 395,
                            height: 395
                        }}>
                            <WeatherCamera handleEventPhotos={handleEventPhotos} onCancel={() => setShowCamera(false)} />
                        </View>
                        : undefined}
                    <View style={{ paddingTop: 12, flexDirection: "row", margin: 4, justifyContent: "flex-end" }}>
                        <Pressable
                            style={[styles.input, { flex: 1, backgroundColor: MAIN_COLORS.form_button_background }]}
                            onPress={resetForm}
                        >
                            <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Tyhjennä</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.input, { flex: 1, backgroundColor: MAIN_COLORS.form_button_background }]}
                            onPress={cancelForm}
                        >
                            <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Peruuta</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.input, { flex: 1, backgroundColor: MAIN_COLORS.form_button_background }]}
                            onPress={id > 0 ? updateEvent : addEvent}
                        >
                            <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Tallenna</Text>
                        </Pressable>
                    </View>

                    <ModalPopup showModal={showModal} onDismiss={() => setShowModal(false)} >
                        <View style={{ backgroundColor: MAIN_COLORS.header_tab_background, padding: 20, borderRadius: 4, borderWidth: 0.4, borderColor: MAIN_COLORS.row_item_forecolor }}>
                            <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4 }}>Päivän {addDate ? format(addDate, 'dd.MM.yyyy') : Date.now()} tiedot tallennettu!</Text>
                        </View>
                    </ModalPopup>

                </ScrollView>
            </View >
        </View >
    );
}
export default EventForm;