export const WeatherEnums =
{
    'LOCATION': 'ACCESS_FINE_LOCATION',

};

export const SETTINGS_FIELD_NAMES =
    [
        { field: 'SERVER_ADDRESS', title: 'Palvelimen ip osoite', type: 'text' },
        { field: 'WEATHER_URL', title: 'Säädatan https osoite', type: 'multitext' },
        { field: 'APP_FIELD_TEST', title: 'Testi kenttä', type: 'text' },
        { field: 'APP_START_VIEW', title: 'Aloitusnäkymä', type: 'select', items: [{ name: 'Valitse aloitusnäyttö...', value: 1 }, { name: 'Graaffi', value: 1 }, { name: 'Säätapahtumat', value: 2 }, { name: 'Säätiedot', value: 3 }] }
    ];

export const PhotoStatus =
{
    'ADDED': 1,
    'REMOVED': 2,
    'EXISTING': 3
};

export const ChartType =
{
    'LineChart': 1,
    'BarChart': 2,
    'PieChart': 3,
    'ProgressChart': 4,
    'ContributionGraph': 5,
    'StackedBarChart': 6
};

export const chartData = {
    labels: ["08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00"
    ],
    datasets: [
        {
            data: [-1.3,
            -0.9,
            -0.2,
                0.4,
                2.5,
                0.4,
                0,
            -1.6,
            -3.7,
            -5.1,
            -6.1,
            -6.9,
            -7.5
            ],
            // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
            // strokeWidth: 2 // optional
        }
    ],
    legend: ["Päivän sää"] // optional
};

export const pieData = [
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