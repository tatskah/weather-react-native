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
    empty_list_content: {
        justifyContent: "center",
        backgroundColor: "#1F6702",
        borderColor: "#98FF6F",
        width: 300,
        height: 100,
        borderWidth: 2,
        marginTop: "50%",
        borderRadius: 12,
    },
    empty_text: {
        alignSelf: "center",
        color: "#98FF6F",
        fontSize: 28,
        textAlign: "center",

    },

    listItem: {
        backgroundColor: "#888",
    },
    indicator: {
        paddingTop: 200,

    }
});

export default styles;