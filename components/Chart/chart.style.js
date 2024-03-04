import { StyleSheet } from "react-native"
import { MAIN_COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MAIN_COLORS.row_item_background,

    },

    content: {
        flex: 1,
        padding: 0,
        paddingTop: 30,
        marginBottom: 50,
        backgroundColor: MAIN_COLORS.row_item_background,
    },
    bar_chart: {
        borderWidth: 1,
        borderColor: MAIN_COLORS.row_item_forecolor,
        marginTop: 4,
        marginBottom: 10,

    }
});
export default styles;