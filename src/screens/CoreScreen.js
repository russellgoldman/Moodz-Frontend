import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ImageBackground, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { coreBackground, johnDoe } from '../../assets/images';
import { CoreScreenTabManager } from '../containers';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class CoreScreen extends Component {
    render() {
        const { 
            johnDoeImageStyle, johnDoeTextStyle
        } = styles;

        return (
            <ImageBackground source={coreBackground} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: screenHeight * (106 / screenPixelHeight) }}>
                    <Image source={johnDoe} resizeMode='contain' style={johnDoeImageStyle} />
                    <Text style={johnDoeTextStyle}>John Doe</Text>
                </View>
                <CoreScreenTabManager />
            </ImageBackground>
        );
    }
}

const styles = {
    johnDoeImageStyle: {
        height: 70,
        width: 70
    },
    johnDoeTextStyle: {
        marginTop: screenHeight * (12 / screenPixelHeight),
        fontFamily: 'rubik',
        fontSize: 20,
        color: '#fff'
    }
}

export default CoreScreen;