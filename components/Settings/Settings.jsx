import React, { Component } from "react";
import { TextInput, Text, View, Pressable, ScrollView } from "react-native";
import styles from './settings.style';
import mainStyles from '../../styles';
import { MAIN_COLORS } from "../../constants";
import { SETTINGS_FIELD_NAMES } from "../../utils/WeatherEnums";
import SettingsService from "../../services/settings.service";

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savingFields: [],
            settingsData: [],
            isLoading: 2,
            screenContent: '',
            dynamicProperties: {},
            url: ''
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
            this.setState({ screenContent: `Näytetään nyt ${this.props.route.name}` });
        }
    };

    async getData() {
        try {
            const { data } = await SettingsService.getSettings();
            this.setState({ settingsData: data });

            if (data) {
                this.log("SETTINGS DATA", data);
                const newSettingsField = {
                    ...this.state.settingsData, data
                }
                this.setState({ settingsData: newSettingsField });
            }

        } catch (error) {
            console.log('ERROR:', error);
        }

    }

    getFieldData(field) {
        const data = this.state.settingsData.data;
        this.log("getFieldData", data)

        let ret = '';
        if (data) {
            data.forEach(item => {
                this.log(item.name, field)
                if (item.name === field) {
                    ret = item.value;
                }
            });
        }
        return ret;
    }

    async updateFieldValue(field, newValue) {
        const oldData = this.state.settingsData.data;

        if (oldData) {
            const newData = await oldData.map(item => {
                if (item.name === field) {
                    let n = item.name;
                    return { ...item, value: newValue }
                };
                return item;
            });
            this.log(newData)
            const newSettingsField = {
                ...this.state.settingsData, newData
            }

            this.setState({ settingsData: newSettingsField });
        }
        this.setState({ isLoading: this.state.isLoading * -1 })
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
                                        multiline={item.type === 'multiline'}
                                        onChangeText={(text) => this.updateFieldValue(item.field, text)}
                                    />
                                </View>
                            ))}

                            <View><Text>{this.state.isLoading}</Text></View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    };



}
