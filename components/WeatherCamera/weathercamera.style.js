import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerPhoto: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        height: 300,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        borderRadius: 8,
        alignSelf: "flex-end",
    },
    preview: {
        flex: 1,
        alignSelf: "center",
        height: 250,
        width: 300,

    }
});
export default styles;