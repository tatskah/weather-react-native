import { useState, useRef, useEffect } from "react";
import { View, Text, Button, SafeAreaView, Image, Dimensions, useWindowDimensions } from "react-native";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library"
import styles from "./weathercamera.style";
import { MAIN_COLORS } from "../../constants";
import { PhotoStatus } from "../../utils/WeatherEnums";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../constants";

const WeatherCamera = ({ onCancel, handleEventPhotos }) => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [isRatioSet, setIsRatioSet] = useState(false);
    const [camHeight, setCamHeigth] = useState();

    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === 'granted');
            setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text style={{ alignSelf: "center", color: MAIN_COLORS.header_tab_forecolor }}>Haetaan kameralle lupaa...</Text>
    } else if (!hasCameraPermission) {
        return <Text>Kameralle ei ole lupaa käyttää.</Text>
    }

    const takePhoto = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };
        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
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
                    handleEventPhotos(photo.uri, PhotoStatus.ADDED);
                    setPhoto(undefined);
                })
            } catch (error) {
                console.log(error);
            }
        };

        savePhoto();

        // return (
        //     <SafeAreaView styles={styles.containerPhoto}>
        //         <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 ? photo.base64 : photo[0].base64 }} />
        //         <Button style={{ width: 10, flex: 1, backgroundColor: MAIN_COLORS.header_tab_background }} title="Jaa" onPress={sharePhoto} />
        //         {hasMediaLibraryPermission ? <Button style={{ flex: 1 }} title="Tallenna" onPress={savePhoto} /> : undefined}
        //         <Button style={{ flex: 1 }} title="Peruuta" onPress={() => setPhoto(undefined)} />
        //     </SafeAreaView>
        // );
    }

    const setCameraReady = async () => {
        if (!isRatioSet) {
            prepareRatio();
        }
    };

    const prepareRatio = async () => {
        const { width } = 380;// useWindowDimensions();
        const height = Math.round((width * 16) / 9);
        //const ratios = await cameraRef.current.getSupportedRatiosAsync();
        //console.log(ratios);

        //let sizes = await cameraRef.current.getAvailablePictureSizesAsync("4:3");
        //console.log(sizes);

        // console.log("camera ready");

        setIsRatioSet(true);
    };

    return (
        <Camera style={styles.camera}
            onCameraReady={setCameraReady}
            ref={cameraRef}
            ratio="4:3"
        >
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cameraButton} onPress={onCancel}>
                    <Image source={icons.back_arrow1_32} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
                    <Image source={icons.take_photo32} />
                </TouchableOpacity>


            </View>
        </Camera >
    )
}
export default WeatherCamera;



{/* <Button style={{ borderRadius: 4, backgroundColor: MAIN_COLORS.row_item_background, color: MAIN_COLORS.header_tab_forecolor, textAlign: "center", height: 21 }} title="Ota kuva" onPress={takePhoto}>
</Button>
<Button style={{ borderRadius: 4, backgroundColor: MAIN_COLORS.row_item_background, color: MAIN_COLORS.header_tab_forecolor, textAlign: "center", height: 24, paddingTop: 1 }} title="Peruuta" onPress={onCancel}>
</Button> */}