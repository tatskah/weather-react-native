import { StyleSheet } from "react-native";
import { SIZES, MAIN_COLORS } from '../../constants'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: MAIN_COLORS.row_item_background,
    },

    content: {
        flex: 1,
        padding: 2,
        paddingTop: 50,
        marginBottom: 54,
        backgroundColor: MAIN_COLORS.row_item_background,
    },

    new_icon: {
        width: SIZES.search_icon,
        height: SIZES.search_icon,
        marginRight: 2,
        marginLeft: 2

    },


    input: {
        height: 40,
        width: "auto",
        borderColor: MAIN_COLORS.header_tab_forecolor,
        borderWidth: 1,
        margin: 2,
        padding: 4,
        borderRadius: 4,
        backgroundColor: MAIN_COLORS.header_tab_background,
        color: MAIN_COLORS.row_item_forecolor
    },
    input_multiline: {
        height: 150,
        borderColor: MAIN_COLORS.header_tab_forecolor,
        borderWidth: 1,
        margin: 6,
        padding: 6,
        borderRadius: 4,
        backgroundColor: MAIN_COLORS.header_tab_background,
        color: MAIN_COLORS.row_item_forecolor
    },

});

export default styles;