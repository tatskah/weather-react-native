import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonsStyle: {
        backgroundColor: MAIN_COLORS.header_tab_background,
        borderRadius: 8,
        color: MAIN_COLORS.row_item_bordercolor
    },
    dialogStyle: {
        height: 180,
        backgroundColor: MAIN_COLORS.header_tab_background,
        borderRadius: 8,
        borderWidth: 1,
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