import { Component } from "react";
import { View, Text, Dimensions, Pressable, Image, ScrollView } from "react-native";
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";
import mainStyles from '../../styles/';
import styles from "./chart.style";
import { MAIN_COLORS, icons } from "../../constants";
import { ChartType } from "../../utils/WeatherEnums";

const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: MAIN_COLORS.header_tab_background,
    backgroundGradientFromOpacity: 30,
    backgroundGradientTo: MAIN_COLORS.header_tab_background_to_grad,
    backgroundGradientToOpacity: 10,
    color: (opacity = 1) => `rgba(252, 180, 25 , ${opacity})`,
    strokeWidth: 1,
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional

};

class Chart extends Component {
    constructor(props) {
        super(props);
        const { data, chartType, title } = this.props;
        this.state = {
            chartData: data,
            chartType: chartType,
            title: title,

        }
    }

    componentDidMount() {

    }

    prt(data) {
        console.log(JSON.stringify(data, null, 2));
    }

    render() {
        return (


            <View>

                {
                    this.state.chartType === ChartType.BarChart ?
                        <>
                            <Text style={{ color: MAIN_COLORS.row_item_forecolor, marginTop: 20 }}>{this.state.title}</Text>
                            <BarChart
                                style={styles.bar_chart}
                                data={this.state.chartData}
                                width={screenWidth - 30}
                                height={300}
                                yAxisLabel=""
                                chartConfig={chartConfig}
                                verticalLabelRotation={-90}
                                showBarTops={true}
                                showValuesOnTopOfBars={true}
                            />
                        </>
                        :
                        undefined

                }
                {
                    this.state.chartType === ChartType.LineChart ?

                        <LineChart
                            style={styles.bar_chart}
                            data={this.state.chartData}
                            width={screenWidth - 30}
                            height={300}
                            yAxisLabel=""
                            chartConfig={chartConfig}
                            verticalLabelRotation={90}
                            bezier={true}
                        />

                        :
                        undefined
                }

                {
                    this.state.chartType === ChartType.PieChart ?

                        <PieChart
                            style={styles.bar_chart}
                            data={this.state.chartData}
                            width={screenWidth - 30}
                            height={240}
                            chartConfig={chartConfig}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[0, 0]}
                            absolute
                        />

                        :
                        undefined
                }


            </View>



        );
    }
}

export default Chart;