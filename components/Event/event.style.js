import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "column",
        padding: 1,
        margin: 2,
        borderColor: MAIN_COLORS.row_item_bordercolor,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: MAIN_COLORS.container_background,
        borderColor: MAIN_COLORS.row_item_bordercolor
    },
    weather_title: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 24,
        padding: 2,
    },
    date_add: {
        flex: 4,
        fontWeight: "bold",
        color: MAIN_COLORS.header_tab_forecolor,
    },
    temp_morning: {
        flex: 1,
        // marginTop: 2,
        color: MAIN_COLORS.header_tab_forecolor,
    },
    temp_middle: {
        flex: 1,
        // marginTop: 2,
        color: MAIN_COLORS.header_tab_forecolor,
    },
    temp_evening: {
        flex: 1,
        // marginTop: 2,
        color: MAIN_COLORS.header_tab_forecolor,
    },
    weather_row: {
        flex: 2,
        flexDirection: "row",
        padding: 1,
        backgroundColor: MAIN_COLORS.row_item_background,
        color: MAIN_COLORS.row_item_forecolor,
        width: "100%"
    },
    weather_row_info: {
        color: MAIN_COLORS.row_item_forecolor,
        padding: 2,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        width: "100%",

    },

    deleteIcon: {
        width: 22,
        height: 22,
    },


});

export default styles;