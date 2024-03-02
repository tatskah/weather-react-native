import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 6,
        alignItems: "center",
        justifyContent: "center",

    },
    image: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: MAIN_COLORS.header_tab_forecolor,
        margin: 6,
        width: 395,
        height: 300
    }

});
export default styles;