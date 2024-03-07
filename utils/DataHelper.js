import AsyncStorage from '@react-native-async-storage/async-storage';


const NullToStr = (str) => {
    if (null === str) {
        return "";
    } else {
        return str;
    }
}

const NullToImageIndex = (imgIndex) => {
    try {
        if (imgIndex === null ||
            imgIndex === undefined ||
            imgIndex === '' ||
            imgIndex < 0 ||
            imgIndex > 8) {
            return 0;
        } else {
            return imgIndex;
        }
    } catch (error) {
        return 0;
    }
}

const GetStorageData = async (key) => {
    try {
        const retValue = await AsyncStorage.getItem(`@Saaohjelma:${key}`);
        if (retValue !== null) {
            return retValue;
        } else {
            return '';
        }
    } catch (error) {
        console.log("GetStorageData error:", error);
    }
}

const SaveStorageData = async (key, value) => {
    try {
        const storageKey = `@Saaohjelma:${key}`;
        await AsyncStorage.setItem(storageKey, value);
    } catch (error) {
        console.log("SaveStorageData error:", error);
    }
}

const RemoveStorageData = async (key) => {
    try {
        const storageKey = `@Saaohjelma:${key}`;
        console.log("remove key:", storageKey);
        await AsyncStorage.removeItem(storageKey);
    } catch (error) {
        console.log("RemoveStorageData error:", error);
    }
}
export default { NullToStr, NullToImageIndex, SaveStorageData, GetStorageData, RemoveStorageData };