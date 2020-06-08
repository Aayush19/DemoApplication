import React, { Component } from 'react';

//importing various components from react-native library to use them
import { Dimensions, Image, PixelRatio, Platform, StyleSheet, Text, View } from 'react-native';

//getting height of the device
const { height, width } = Dimensions.get('window');

//creating and exporting a default class named DemoScreen into App.js
export default class DemoScreen extends Component {

    //Main Render function of the class
    render() {

        //return displayes out the design layout
        return (
            <View style={styles.container1}>

                {/* proper view styling to justify content evenly */}

                <View style={styles.container2}>
                    {/* //spliting Components in different different view for proper and organized display */}

                    {/* //View for displaying Image */}

                    <View style={[styles.LogoImageView, { backgroundColor: '#ACE5EE', }]}>
                        <Image source={require('./assets/fb.png')} style={styles.LogoImage} /> {/* //Image with proper height, width and border radius */}
                    </View>

                    {/* //closing view of first image */}

                    {/* //View for displaying Image */}

                    <View style={[styles.LogoImageView, { backgroundColor: '#F5F5F5' }]}>
                        <Image source={require('./assets/google.png')} style={styles.LogoImage} /> {/* //Image with proper height, width and border radius */}
                    </View>

                    {/* //closing view of second image */}

                    {/* // View for displaying button this can be replaced by TouchableOpacity when needs to be clicked */}

                    <View style={styles.ButtonView}>
                        <Text style={{ justifyContent: 'center', fontSize: normalize(20), color: 'white', fontWeight: 'bold', textAlign: 'center' }}> {/* //Text to be displayed in a box container */}
                            Sign In
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}
// creating styles for each view
const styles = StyleSheet.create({
    container1: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: height / 1
    },
    LogoImageView: {
        elevation: 5,
        shadowColor: 'white',
        shadowOpacity: 0.5,
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
        padding: 20,
        elevation: 15,
        // shadowColor: 'white',
        shadowOpacity: 1
    },
    LogoImage: {
        height: '70%',
        resizeMode: 'contain',
        width: '70%',
        elevation: 5,
        alignSelf: 'center'
    }
})

//creating a normalize function for text to be automatically be rendered as per device scale
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