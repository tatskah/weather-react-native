const WeatherTypes = [
    {
        label: "Valitse sää...",
        value: "0",
        key: "0 ",
        image: require('../assets/icons/question.png')
    },
    {
        label: "Aurinkoista",
        value: "1",
        key: "1",
        image: require('../assets/icons/sun.png')
    },
    {
        label: "Puolipilvistä",
        value: "2",
        key: "2",
        image: require('../assets/icons/cloudy-sun.png')
    },
    {
        label: "Pilvistä",
        value: "3",
        key: "3",
        image: require('../assets/icons/clouds.png')
    },
    {
        label: "Vesisadetta",
        value: "4",
        key: "4",
        image: require('../assets/icons/rain.png')
    },
    {
        label: "Lumisadetta",
        value: "5",
        key: "5",
        image: require('../assets/icons/little-snow.png')
    },
    {
        label: "Lumituisku",
        value: "6",
        key: "6",
        image: require('../assets/icons/snow-storm.png')
    },
    {
        label: "Tuulista",
        value: "7",
        key: "7",
        image: require('../assets/icons/windmill.png')
    },
    {
        label: "Ukkonen",
        value: "8",
        key: "8",
        image: require('../assets/icons/cloud-lighting.png')
    }
];

const WeatherTypesArr = ['Valitse sää...', 'Aurinkoista', 'Puolipilvistä', 'Pilvistä', 'Vesisadetta', 'Lumisadetta', 'Lumituisku', 'Tuulista', 'Ukkonen'];

export default { WeatherTypes, WeatherTypesArr };