import { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Chart from "../Chart/Chart";
import { ChartType, WeatherEnums } from "../../utils/WeatherEnums";
import mainStyles from '../../styles';
import styles from "../Chart/chart.style";
import { MAIN_COLORS } from "../../constants";

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
            data: [20, 45, 28, 80, 69, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            strokeWidth: 2 // optional
        }
    ],
    legend: ["Rainy Days"] // optional
};

const pieData = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

class WeatherChart extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
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
                            <Chart data={data} chartType={ChartType.BarChart} />

                            <Chart data={data} chartType={ChartType.LineChart} />

                            <Chart data={pieData} chartType={ChartType.PieChart} />

                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default WeatherChart;

