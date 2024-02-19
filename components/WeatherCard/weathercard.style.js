import { StyleSheet } from "react-native";
import { SIZES, MAIN_COLORS } from "../../constants";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: MAIN_COLORS.container_background,

    },

    content: {
        flex: 1,
        paddingTop: 50,
        marginBottom: 54,
        backgroundColor: MAIN_COLORS.container_background,
    },
    card: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: MAIN_COLORS.container_background,
        height: 50,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: MAIN_COLORS.row_item_bordercolor,
        margin: 2,
        padding: 6,
        color: MAIN_COLORS.row_item_bordercolor,

    },
    item_text_color: {
        color: MAIN_COLORS.row_item_forecolor,

    }

});
export default styles;