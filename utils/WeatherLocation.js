import GeoLocation from 'react-native-geolocation-service';

const getDeviceCurrentLocation = async () =>
{
    return new Promise((resolve, reject) =>
        GeoLocation.getCurrentPosition(
            (position) =>
            {
                resolve(position);
            },
            (error) =>
            {
                reject(error);
            },
            {
                enableHighAccuracy: true, // Whether to use high accuracy mode or not
                timeout: 15000, // Request timeout
                maximumAge: 10000 // How long previous location will be cached
            }
        )
    );
};