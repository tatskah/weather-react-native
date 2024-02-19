import http from '../db';
class WeatherService {

    getWeatherData(lat, lng) {
        const params = new URLSearchParams();
        params.append('url', 'https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lng + '&hourly=temperature_2m,rain,weather_code&daily=weather_code');
        return http.get('/weatherdata?' + params);
    }
    // getWeatherData(lat, lng) {
    //     return http.get('https://api.open-meteo.com/v1/forecast?latitude=' + lat + '&longitude=' + lng + '&hourly=temperature_2m,rain,weather_code&daily=weather_code');
    // }

}
export default new WeatherService;