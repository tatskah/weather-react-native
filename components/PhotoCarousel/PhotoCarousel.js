import { Component } from 'react';
import CustomCarousel from 'carousel-with-pagination-rn';
import { View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styles from './photocarousel.style';
import { MAIN_COLORS } from '../../constants';

export default class PhotoCarousel extends Component {
    constructor(props) {
        super(props);
        const { eventPhotos } = this.props;
        this.state = {
            eventPhotos: eventPhotos,

        }
    }

    componentDidMount() {
        // console.log("MNT EVENTPHOTOS:", this.state.eventPhotos.length);
    }

    componentDidUpdate() {
        // console.log(" UPD EVENTPHOTOS:", this.state.eventPhotos.length);
    }

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

    render() {
        return (

            <CustomCarousel
                data={this.state.eventPhotos}
                renderItem={({ item, index }) => {
                    return (
                        // <PanGestureHandler>
                        <View style={styles.container}>
                            <TouchableOpacity onPress={() => console.log(index, item.id, this.state.eventPhotos)}>
                                <Image
                                    key={item.id}
                                    source={{ uri: item.uri }}
                                    style={styles.image}
                                    resizeMode='cover'
                                />
                            </TouchableOpacity>
                        </View>
                        // </PanGestureHandler>
                    );
                }}
            />

        );
    }
}