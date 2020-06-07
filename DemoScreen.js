import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, StyleSheet, Platform, PixelRatio } from 'react-native';
const { height, width } = Dimensions.get('window');
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export default class DemoScreen extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%',
                    marginTop: height / 1
                }}>
                    <View style={[styles.LogoImageView, { backgroundColor: '#ACE5EE', }]}>
                        <Image source={require('./assets/fb.png')} style={styles.LogoImage} />
                    </View>
                    <View style={[styles.LogoImageView, { backgroundColor: '#F5F5F5' }]}>
                        <Image source={require('./assets/google.png')} style={styles.LogoImage} />
                    </View>
                    <View style={styles.ButtonView}>

                        <Text style={{ justifyContent: 'center', fontSize: normalize(20), color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
                            Sign In
                        </Text>

                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    LogoImageView: {
        elevation: 3,
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 5,
        alignSelf: 'center',
        borderRadius: 30,
        justifyContent: 'center'
    },
    ButtonView: {
        height: Dimensions.get('window').width / 5,
        width: Dimensions.get('window').width / 3.5,
        alignSelf: 'center',
        marginHorizontal: 20,
        borderRadius: 30,
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        padding: 20
    },
    LogoImage: {
        height: '70%',
        resizeMode: 'contain',
        width: '70%',
        elevation: 5,
        alignSelf: 'center'
    }
})