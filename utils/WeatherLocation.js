import GeoLocation from 'react-native-geolocation-service';

const getDeviceCurrentLocation = async () => {
    return new Promise((resolve, reject) =>
        GeoLocation.getCurrentPosition(
            (position) => {
                resolve(position);
            },
            (error) => {
                reject(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000
            }
        )
    );
};