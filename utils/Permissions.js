import { PermissionsAndroid } from "react-native";


class PermissionsManagement 
{

    async checkPermission(permissionType)
    {
        try
        {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted)
            {
                console.log("Location permissions granted");
                return true;
            }
            else
            {
                console.log("Location permissions not granted");
                return false;
            }
        } catch (error)
        {
            console.log(error);
        }

    }

    // requestCameraPermission = async () =>
    // {
    //     try
    //     {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.CAMERA,
    //             {
    //                 title: 'Cool Photo App Camera Permission',
    //                 message:
    //                     'Cool Photo App needs access to your camera ' +
    //                     'so you can take awesome pictures.',
    //                 buttonNeutral: 'Ask Me Later',
    //                 buttonNegative: 'Cancel',
    //                 buttonPositive: 'OK',
    //             },
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED)
    //         {
    //             console.log('You can use the camera');
    //         } else
    //         {
    //             console.log('Camera permission denied');
    //         }
    //     } catch (err)
    //     {
    //         console.warn(err);
    //     }
    // };




    async addPermission(permissionType)
    {
        const granted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Cool Photo App Camera Permission',
                message:
                    'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
    }

}
export default new PermissionsManagement;