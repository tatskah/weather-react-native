import PropTypes from "prop-types";
import { View, } from "react-native"
import { ConfirmDialog } from 'react-native-simple-dialogs';
import styles from "./confirmform.style";
import { MAIN_COLORS } from "../../constants";

export default ConfirmForm = ({ showDialog, isCustomDialog, title, description, onCancel, children, handleButtonPressed }) => {

    if (!showDialog) return null;

    if (isCustomDialog === 'undefined') {
        isCustomDialog = false;
    }
    return (
        <View style={styles.container}>

            {isCustomDialog ?
                <ConfirmDialog
                    title={title}
                    visible={showDialog}
                    dialogStyle={styles.dialogStyle}
                    titleStyle={styles.titleStyle}
                    onTouchOutside={onCancel}
                    animationType="slide"
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
                    buttonsStyle={styles.buttonsStyle}
                    dialogStyle={styles.dialogStyle}
                    titleStyle={styles.titleStyle}
                    messageStyle={styles.messageStyle}
                    animationType="slide"
                    title={title}
                    statusBarTranslucent={true}
                    message={description}
                    visible={showDialog}
                    onTouchOutside={onCancel}
                    positiveButton={{
                        borderColor: MAIN_COLORS.row_item_forecolor,
                        title: "Ok",
                        titleStyle: { color: MAIN_COLORS.row_item_forecolor, },
                        style: { marginTop: 20, fontSize: 14, alignContent: "center", height: 40, borderRadius: 4, borderColor: MAIN_COLORS.header_tab_forecolor, borderWidth: 1, },
                        onPress: () => handleButtonPressed(true)
                    }}
                    negativeButton={{
                        title: "Peruuta",
                        titleStyle: { color: MAIN_COLORS.row_item_forecolor, },
                        style: { marginTop: 20, fontSize: 14, alignContent: "center", height: 40, borderRadius: 4, borderColor: MAIN_COLORS.header_tab_forecolor, borderWidth: 1, },
                        onPress: () => onCancel()
                    }}
                />
            }
        </View >

    )
}

ConfirmForm.defaultProps = {
    showDialog: false,
    title: 'text',
    description: 'text',
    handleButtonPressed: () => { }
}

ConfirmForm.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    handleButtonPressed: PropTypes.func.isRequired
}
