import { ProgressDialog } from 'react-native-simple-dialogs';
import { View } from 'react-native';
import { MAIN_COLORS } from '../../constants';

export default ProgressForm = ({ showDialog, title, description }) => {
    return (
        <View>
            <ProgressDialog
                visible={showDialog}
                title={title}
                message={description}
                activityIndicatorColor={MAIN_COLORS.row_item_forecolor}
                activityIndicatorSize={"large"}
            />
        </View>
    );
}

