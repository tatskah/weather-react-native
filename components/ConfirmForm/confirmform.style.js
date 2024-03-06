import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonStyle: {
        backgroundColor: MAIN_COLORS.header_tab_background,
        borderRadius: 0,
        borderWidth: 0.2,
        borderTopColor: MAIN_COLORS.header_tab_forecolor,
        color: MAIN_COLORS.row_item_bordercolor
    },
    dialogStyle: {
        height: 196,
        backgroundColor: MAIN_COLORS.header_tab_background,
        borderRadius: 4,
        borderWidth: 0.4,
        borderColor: MAIN_COLORS.header_tab_forecolor
    },
    titleStyle: {
        color: MAIN_COLORS.row_item_forecolor
    },
    messageStyle: {
        color: MAIN_COLORS.row_item_forecolor,
        fontSize: 14,
    },


});
export default styles;