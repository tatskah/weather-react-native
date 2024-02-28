
import { View, } from "react-native"
import { ConfirmDialog } from 'react-native-simple-dialogs';
import styles from "./confirmform.style";
import { MAIN_COLORS } from "../../constants";

export default ConfirmForm = ({ showDialog, isCustomDialog, title, description, onCancel, children, handleButtonPressed }) => {


    if (!showDialog) return null;

    if (isCustomDialog === 'undefined') {
        isCustomDialog = false;
    }

    const hideDialog = () => {

    }

    return (
        <View style={styles.container}>

            {isCustomDialog ?
                <ConfirmDialog
                    title={title}
                    visible={showDialog}
                    onTouchOutside={onCancel}
                    positiveButton={{
                        title: "OK",
                        titleStyle: { color: MAIN_COLORS.row_item_forecolor },
                        onPress: () => handleButtonPressed(true)
                    }} >
                    <View>
                        {children}
                    </View>
                </ConfirmDialog>

                :
                <ConfirmDialog
                    buttonsStyle={{ backgroundColor: MAIN_COLORS.header_tab_background, borderRadius: 8, color: MAIN_COLORS.row_item_bordercolor }}
                    dialogStyle={{ backgroundColor: MAIN_COLORS.header_tab_background, borderRadius: 8, borderWidth: 1, borderColor: MAIN_COLORS.header_tab_forecolor }}
                    titleStyle={{ color: MAIN_COLORS.row_item_forecolor }}
                    messageStyle={{ color: MAIN_COLORS.row_item_forecolor, fontSize: 14, }}
                    animationType="slide"
                    title={title}
                    message={description}
                    visible={showDialog}
                    onTouchOutside={onCancel}
                    positiveButton={{
                        borderColor: MAIN_COLORS.row_item_forecolor,
                        title: "Ok",
                        titleStyle: { color: MAIN_COLORS.row_item_forecolor, },
                        style: { fontSize: 14, alignContent: "center", height: 32, borderRadius: 8, borderColor: MAIN_COLORS.header_tab_forecolor, borderWidth: 1, },
                        onPress: () => handleButtonPressed(true)
                    }}
                    negativeButton={{
                        title: "Peruuta",
                        titleStyle: { color: MAIN_COLORS.row_item_forecolor, },
                        style: { height: 32, borderRadius: 8, borderColor: MAIN_COLORS.header_tab_forecolor, borderWidth: 1, },
                        onPress: () => onCancel()
                    }}
                />
            }


        </View >

    )
}
