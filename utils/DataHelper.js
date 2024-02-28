
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
            imgIndex === 'undefined' ||
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






export default { NullToStr, NullToImageIndex };