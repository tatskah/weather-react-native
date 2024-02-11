
const WeatherConditions = {
    Rain: { color: '#005BEA', title: 'Sadetta', icon: 'weather-rainy' },
    Clear: { color: '#f7b733', title: 'Aurinkoista', icon: 'weather-sunny' },
    Thunderstorm: { color: '#616161', title: 'Myrsky on tulossa', icon: 'weather-lightning' },
    Clouds: { color: '#1F1C2C', title: 'Pilvistä', icon: 'weather-cloudy' },
    Snow: { color: '#00d2ff', title: 'Lumisadetta', icon: 'weather-snowy' },
    Drizzle: { color: '#076585', title: 'Tihkusadetta', icon: 'weather-hail' },
    Haze: { color: '#66A6FF', title: 'Usvaa', icon: 'weather-hail' },
    Mist: { color: '#3CD3AD', title: 'Sumuista', icon: 'weather-fog' },
    Nothing: { color: '#3CD3AD', title: 'Ei määritelty', icon: 'null' }
}


const WeatherType = (wType) =>
{
    switch (wType)
    {
        case 0:
            return WeatherConditions['Clear'].icon;
            break;
        case 1:
        case 2:
        case 3:
            return WeatherConditions['Clouds'].icon
            break;
        case 45:
        case 48:
            return WeatherConditions['Mist'].icon
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return WeatherConditions['Drizzle'].icon
            break;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return WeatherConditions['Rain'].icon
            break;
        case 71:
        case 73:
        case 75:
        case 85:
        case 86:
            return WeatherConditions['Snow'].icon
            break;
        case 95:
        case 96:
        case 99:
            return WeatherConditions['Thunderstorm'].icon
            break;
        default:
            return WeatherConditions['Nothing'].icon
            break;
    }
}

const WeatherText = (wType) =>
{
    switch (wType)
    {
        case 0:
            return WeatherConditions['Clear'].title;
            break;
        case 1:
        case 2:
        case 3:
            return WeatherConditions['Clouds'].title
            break;
        case 45:
        case 48:
            return WeatherConditions['Mist'].title
            break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
            return WeatherConditions['Drizzle'].title
            break;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
            return WeatherConditions['Rain'].title
            break;
        case 71:
        case 73:
        case 75:
        case 85:
        case 86:
            return WeatherConditions['Snow'].title
            break;
        case 95:
        case 96:
        case 99:
            return WeatherConditions['Thunderstorm'].title
            break;
        default:
            return WeatherConditions['Nothing'].title
            break;
    }
}
export { WeatherType, WeatherText };