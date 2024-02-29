import { StyleSheet } from "react-native"
import { MAIN_COLORS, SIZES } from "../../constants";

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
    input_calendar: {
        height: 40,
        borderColor: MAIN_COLORS.header_tab_forecolor,
        borderWidth: 1,
        margin: 6,
        padding: 6,
        borderRadius: 4,
        backgroundColor: MAIN_COLORS.header_tab_forecolor,
        color: MAIN_COLORS.row_item_forecolor
    },
    dropdownRowImage: {
        flex: 1,
        marginLeft: 2,
        marginTop: 8,
        flex: 1,
        width: 14,
        height: 14,
        resizeMode: 'center'
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontWeight: 'normal',
        fontSize: 12,
        marginHorizontal: 12,
    },
    camera_icon: {
        width: SIZES.search_icon,
        height: SIZES.search_icon,
        marginRight: 8,
        marginLeft: 2

    },
})
export default styles;
