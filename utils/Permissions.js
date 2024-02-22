import { PermissionsAndroid } from "react-native";


class PermissionsManagement {

    async checkPermission(permissionType) {
        try {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted) {
                console.log("Location permissions granted");
                return true;
            }
            else {
                console.log("Location permissions not granted");
                return false;
            }
        } catch (error) {
            console.log(error);
        }

    }

    async addPermission(permissionType) {
        const granted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Location permissions',
                message:
                    'App requires permissions to location service so it can get location for weather api',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
    }

}
export default new PermissionsManagement;