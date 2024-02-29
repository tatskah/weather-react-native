import { View, Text, Modal, Pressable, Keyboard } from "react-native";
import styles from './modalpopup.style';
import { MAIN_COLORS } from "../../constants";
import { useState, useEffect } from "react";
// import Animated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated'

export default ModalPopup = ({ showModal, onDismiss, children }) => {
    // const opacity = useSharedValue(0)
    // const backdropAnimatedStyle = useAnimatedStyle(() => ({
    //     opacity: opacity.value * 0.6,
    // }))

    // useEffect(() => {
    //     opacity.value = withTiming(showModal ? 1 : 0)
    //     if (!showModal) Keyboard.dismiss()
    // }, [showModal])

    if (!showModal) return null;

    return (
        <Modal transparent visible={showModal}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <Pressable onPress={onDismiss}>
                    {/* <Animated.View style={[styles.backdrop, backdropAnimatedStyle]} /> */}
                </Pressable>
                {children}
            </View>
        </Modal>
    );
}