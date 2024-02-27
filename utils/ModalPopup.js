import { View, Text, Modal, Pressable } from "react-native";
import mainStyles from '../styles/index';
import { MAIN_COLORS } from "../constants";
import { useState } from "react";

export default ModalPopup = ({ bShow, msg }) => {
    const [showModal, setShowModal] = useState(bShow);

    console.log({ showModal });

    return (

        <Modal visible={showModal} animationType="slide" transparent={true}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <View style={{ backgroundColor: MAIN_COLORS.header_tab_background, padding: 20, borderRadius: 10 }}>
                    <Text style={{ color: MAIN_COLORS.row_item_forecolor, padding: 4 }}>{msg}</Text>
                    <Pressable style={{ backgroundColor: MAIN_COLORS.row_item_background }} title="Sulje" onPress={() => setShowModal(false)} />
                </View>
            </View>
        </Modal>


    );

}