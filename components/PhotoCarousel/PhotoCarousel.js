import { Component } from 'react';
import CustomCarousel from 'carousel-with-pagination-rn';
import { View, Dimensions, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PanGestureHandler } from 'react-native-gesture-handler';
import styles from './photocarousel.style';

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
                renderItem={({ item }) => {
                    return (
                        // <PanGestureHandler>
                        <View style={styles.container}>
                            <Image
                                source={{ uri: item.uri }}
                                style={styles.image}
                                resizeMode='cover'
                            />
                        </View>
                        // </PanGestureHandler>
                    );
                }}
            />

        );
    }
}