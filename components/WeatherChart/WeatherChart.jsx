import { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Chart from "../Chart/Chart";
import { ChartType, WeatherEnums } from "../../utils/WeatherEnums";
import mainStyles from '../../styles';
import styles from "../Chart/chart.style";
import { MAIN_COLORS } from "../../constants";
import { data, pieData } from "../../utils/WeatherEnums";
import weatherService from "../../services/weather.service";
import { format } from 'date-fns';

class WeatherChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requestError: '',
            latitude: 0,
            longitude: 0,
            data: []
        };
    }

    componentDidMount() {
        this.unsubscribe = this.props.navigation.addListener('focus', () => {
            this.getWeatherData();
        });

    };
    componentWillUnmount() {
        if (this.unsubscribe) {
            this.setState({ chartData: [] });
            this.unsubscribe();
        }
    }

    async getWeatherData() {
        let lat = 66.105190;
        let lng = 28.146335;
        let labels = [];
        let temperatures = [];
        try {
            this.setState({ latitude: lat.toFixed(2) });
            this.setState({ longitude: lat.toFixed(2) });

            const ret_data = await weatherService.getWeatherData(lat, lng);
            if (ret_data) {
                const daily = ret_data.data.daily.time;
                const hourly = ret_data.data;

                for (day of daily) {
                    if (day === format(Date.now(), 'yyyy-MM-dd')) {
                        for (const [index, item] of hourly.hourly.time.entries()) {
                            if (
                                item === day + 'T08:00'
                                || item === day + 'T09:00'
                                || item === day + 'T10:00'
                                || item === day + 'T11:00'
                                || item === day + 'T12:00'
                                || item === day + 'T13:00'
                                || item === day + 'T14:00'
                                || item === day + 'T15:00'
                                || item === day + 'T16:00'
                                || item === day + 'T17:00'
                                || item === day + 'T18:00'
                                || item === day + 'T19:00'
                                || item === day + 'T20:00'
                            ) {
                                labels.push(format(hourly.hourly.time[index], 'HH:mm'));
                                temperatures.push(hourly.hourly.temperature_2m[index]);
                            }
                        }
                    }
                }
                const data = {
                    labels: labels,
                    datasets: [{ "data": temperatures }],
                    legend: ["Säätiedot"]
                };
                this.setState({ data: data });
            }
        } catch (error) {
            this.setState({ requestError: error });
            console.log("getWeatherData: ", error);
            return "error";
        }
    }

    prt = (msg) => { console.log(JSON.stringify(msg, null, 2)); }

    render() {
        const { data } = this.state;
        return (
            <View style={mainStyles.container}>
                <View style={mainStyles.appHeader}>
                    <Text style={mainStyles.appHeaderText}>Graaffit</Text>
                    {/* <Pressable >
                    <Image style={styles.camera_icon} source={icons.camera_thick} />
                </Pressable> */}
                </View>
                <View style={styles.content}>
                    <ScrollView>
                        <View style={{ flex: 1, flexDirection: "column", alignItems: "center", padding: 4, }}>
                            {Object.keys(this.state.data).length > 0 ?
                                <Chart title={"Päivän sää"} data={data} chartType={ChartType.BarChart} />
                                :
                                undefined
                            }
                            {/* <Chart data={chartData} chartType={ChartType.LineChart} /> */}

                            {/* <Chart data={pieData} chartType={ChartType.PieChart} /> */}

                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default WeatherChart;

