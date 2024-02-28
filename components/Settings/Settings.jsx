import React, { Component } from "react";
import { TextInput, Text, View, Pressable, ScrollView } from "react-native";
import styles from './settings.style';
import mainStyles from '../../styles';
import { MAIN_COLORS } from "../../constants";
import { SETTINGS_FIELD_NAMES } from "../../utils/WeatherEnums";
import SettingsService from "../../services/settings.service";
import ModalPopup from "../ModalPopup/ModalPopup";
export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savingFields: [],
            settingsData: [],
            isLoading: 2,
            dynamicProperties: {},
            url: '',
            showModal: false

        }
    };

    createSavingProperties() {
        const data = this.state.settingsData;
        if (data) {
            data.forEach(item => {
                if (item.name === field) {
                    console.log(item.value);
                    ret = item.value;
                }
            });
        }
    }

    componentWillUnmount() {

    }

    componentDidMount() {
        this.getData();

    };

    componentDidUpdate(prevProps, prevState) {
        // console.log('PREVPROPS:', prevProps);
        // console.log('PREVSTATE', prevState);
        if (prevProps.route.name !== this.props.route.name) {

        }
    };

    async getData() {
        try {
            const { data } = await SettingsService.getSettings();
            if (data) {
                const newData = await data.map(item => {
                    return item;
                });
                this.setState({ settingsData: newData });
            }
        } catch (error) {
            console.log('ERROR:', error);
        }
    }

    getFieldData(field) {
        const data = this.state.settingsData;
        let ret = '';
        if (data) {
            data.forEach(item => {
                if (item.name === field) {
                    ret = item.value;
                }
            });
        }
        return ret;
    }

    updateFieldValue(field, newValue) {
        const oldData = this.state.settingsData;
        if (oldData) {
            const newData = oldData.map(item => {
                if (item.name === field) {
                    return { ...item, value: newValue }
                };
                return item;
            });
            this.setState({ settingsData: newData });
        }
    }

    saveData = () => {

        this.setState({ showModal: true });

        setTimeout(() => {
            this.setState({ showModal: false });
        }, 2000);

        setTimeout(() => {
            this.props.navigation.navigate("Events");
        }, 2500);
    }

    cancelForm = () => {
        this.props.navigation.navigate("Events");
    }

    resetForm = () => {
        this.setState({ settingsData: [] })
    }

    log(...msg) {
        console.log(...msg);
    }

    render() {
        const { dynamicProperties } = this.state
        return (
            <View style={mainStyles.container}>
                <View style={mainStyles.appHeader}>
                    <Text style={mainStyles.appHeaderText}>Asetukset</Text>
                </View>
                <View style={styles.content}>
                    <ScrollView>

                        <View style={{ flex: 1, flexDirection: "column", alignItems: "stretch", margin: 4 }}>
                            {SETTINGS_FIELD_NAMES.map((item, index) => (
                                <View style={{}} key={'view-' + index}>
                                    <Text style={{ color: MAIN_COLORS.header_tab_forecolor, marginLeft: 4 }} key={index}>{item.title}</Text>
                                    <TextInput
                                        style={[item.type === 'multitext' ? styles.input_multiline : styles.input, { margin: 6, paddingLeft: 10 }]}
                                        value={'' + this.getFieldData(item.field)}
                                        readOnly={false}
                                        multiline={item.type === 'multitext'}
                                        onChangeText={(text) => this.updateFieldValue(item.field, text)}
                                    />
                                </View>
                            ))}
                        </View>


                        <View style={{ paddingTop: 0, flexDirection: "row", margin: 8, justifyContent: "flex-end" }}>
                            <Pressable
                                style={[styles.input, { flex: 1, backgroundColor: MAIN_COLORS.form_button_background }]}
                                onPress={this.resetForm}
                            >
                                <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Tyhjennä</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.input, { flex: 1, backgroundColor: MAIN_COLORS.form_button_background }]}
                                onPress={this.cancelForm}
                            >
                                <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Peruuta</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.input, { flex: 1, backgroundColor: MAIN_COLORS.form_button_background }]}
                                onPress={this.saveData}
                            >
                                <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4, width: "100%", textAlign: "center" }}>Tallenna</Text>
                            </Pressable>
                        </View>


                        <ModalPopup showModal={this.state.showModal} onDismiss={() => setShowModal(false)} >
                            <View style={{ backgroundColor: MAIN_COLORS.header_tab_background, padding: 20, borderRadius: 10, borderWidth: 1, borderColor: MAIN_COLORS.row_item_forecolor }}>
                                <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4 }}>Asetukset tallennettu!</Text>
                            </View>
                        </ModalPopup>

                    </ScrollView>
                </View>
            </View>
        );
    };



}
