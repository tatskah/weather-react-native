import { StyleSheet } from "react-native";
import { SIZES, COLORS } from '../../constants'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#555",
    },

    content: {
        flex: 1,
        padding: 0,
        paddingTop: 50,
        marginBottom: 54,
        backgroundColor: "#555",
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
        shadowColor: "#98FF6F",
        borderColor: "#98FF6F",
        shadowRadius: 4,
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


    }
});

export default styles;