import { useState, useRef, useEffect } from "react";
import { View, Text, Button, SafeAreaView, Image } from "react-native";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library"
import styles from "./weathercamera.style";
import { MAIN_COLORS } from "../../constants";
import { ScrollView } from "react-native-web";

const WeatherCamera = ({ onCancel, handlePhotoUri }) => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();
    const [cameraVisible, setCameraVisible] = useState(true);

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
            setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text style={{ color: MAIN_COLORS.header_tab_forecolor }}>Requestiong permissions...</Text>
    } else if (!hasCameraPermission) {
        return <Text>Permission to camera not granted. Pleas change this at settings.</Text>
    }

    const takePhoto = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
        // setCameraVisible(false);
    }

    if (photo) {
        let sharePhoto = () => {
            try {
                shareAsync(photo.uri ? photo.uri : photo[0].uri).then(() => {
                    setPhoto(undefined);
                });
            } catch (error) {
                console.log(error);

            }
        };

        let savePhoto = () => {
            try {
                MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                    handlePhotoUri(photo.uri);
                    setPhoto(undefined);
                })
            } catch (error) {
                console.log(error);
            }
        };
        return (
            <SafeAreaView styles={styles.containerPhoto}>
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 ? photo.base64 : photo[0].base64 }} />
                <Button style={{ width: 10, flex: 1, backgroundColor: MAIN_COLORS.header_tab_background }} title="Jaa" onPress={sharePhoto} />
                {hasMediaLibraryPermission ? <Button style={{ flex: 1 }} title="Tallenna" onPress={savePhoto} /> : undefined}
                <Button style={{ flex: 1 }} title="Peruuta" onPress={() => setPhoto(undefined)} />
            </SafeAreaView>
        );
    }

    return (
        <Camera style={styles.container} ref={cameraRef} >
            <View style={styles.cameraButton}>
                <Button style={{ borderRadius: 4, backgroundColor: MAIN_COLORS.row_item_background, color: MAIN_COLORS.header_tab_forecolor, textAlign: "center", height: 24, paddingTop: 1 }} title="Ota kuva" onPress={takePhoto}>
                    {/* <Text style={{ borderRadius: 4, backgroundColor: MAIN_COLORS.row_item_background, color: MAIN_COLORS.header_tab_forecolor, textAlign: "center", height: 24, paddingTop: 1 }}>Ota kuva</Text> */}
                </Button>
                <Button style={{ borderRadius: 4, backgroundColor: MAIN_COLORS.row_item_background, color: MAIN_COLORS.header_tab_forecolor, textAlign: "center", height: 24, paddingTop: 1 }} title="Peruuta" onPress={onCancel}>
                    {/* <Text style={{ borderRadius: 4, backgroundColor: MAIN_COLORS.row_item_background, color: MAIN_COLORS.header_tab_forecolor, textAlign: "center", height: 24, paddingTop: 1 }}>Peruuta</Text> */}
                </Button>
            </View>
        </Camera >
    )
}
export default WeatherCamera;