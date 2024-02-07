import { StyleSheet } from "react-native";
import { MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-between",
        // alignItems: "stretch",
        flexDirection: "column",
        padding: 2,
        margin: 2,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        // borderColor: "#CCCCCC",
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: MAIN_COLORS.container_background,
        // shadowColor: "#CCCCCC",
        shadowRadius: 1,
        width: "100%"
    },
    info: {
        flex: 1,
        fontWeight: "bold",
        height: 24,
        color: MAIN_COLORS.header_tab_forecolor,
    },
    weather_row: {
        flex: 1,
        padding: 1,
        // justifyContent: "space-around",
        flexDirection: "row",
        width: "100%"
    },
    weather_row_item: {
        backgroundColor: MAIN_COLORS.row_item_background,
        color: MAIN_COLORS.row_item_forecolor,
        padding: 2,

    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
        width: "100%",

    },
    item_title: {
        color: MAIN_COLORS.header_tab_forecolor,
        backgroundColor: "#555",
        textShadowColor: MAIN_COLORS.header_tab_forecolor,
        fontWeight: "bold",
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: MAIN_COLORS.header_tab_forecolor,
        borderBottomRightRadius: 1,
        height: 24,
        width: "100%"
    }


});

export default styles;