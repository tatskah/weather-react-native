import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";
import { Dimensions } from "react-native";

const styles = StyleSheet.create({

    camera: {

        flex: 1,
        width: 393,
        // height: 37
        flexDirection: "column",
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 2,
    },
    cameraButton: {

        borderWidth: 1,
        borderRadius: 4,
        padding: 4,
        backgroundColor: MAIN_COLORS.header_tab_background,
        borderColor: MAIN_COLORS.header_tab_forecolor

    },
    // preview: {
    //     flex: 1,
    //     alignSelf: "center",
    //     height: 300,
    //     width: 300,

    // },


});
export default styles;