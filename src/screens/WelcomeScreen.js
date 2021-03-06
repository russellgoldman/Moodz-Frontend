import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { introBackground } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class WelcomeScreen extends Component {
    _getStarted = () => {
        var navigate = NavigationActions.navigate({
            routeName: 'CreateProfileScreen',
          });
        this.props.navigation.navigate(navigate);
    };

    render() {
        const { 
            outerContainer, titleText, welcomeText, getStartedButton, getStartedText
        } = styles;

        return (
            <ImageBackground source={introBackground} style={{width: '100%', height: '100%'}}>
                <View style={outerContainer}>
                    <Text style={titleText}>Hi!</Text>
                    <Text style={welcomeText}>Welcome to Moodz. We are here to help you get the best cannabis experince possible. Set your interests and start exploring.</Text>
                    <TouchableOpacity style={getStartedButton} onPress={this._getStarted}>
                        <Text style={getStartedText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = {
    outerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleText: {
        marginTop: screenHeight * (253 / screenPixelHeight),
        fontFamily: 'rubik',
        fontSize: 64,
        color: '#fff'
    },
    welcomeText: {
        marginTop: screenHeight * (38 / 769),
        fontFamily: 'rubik',
        fontSize: 14,
        marginLeft: screenWidth * (65 / screenPixelWidth),
        marginRight: screenWidth * (65 / screenPixelWidth),
        textAlign: 'center',
        lineHeight: 30,
        color: '#fff'
    },
    getStartedButton: {
        justifyContent: 'center',
        marginTop: screenHeight * (207 / screenPixelHeight),
        marginLeft: screenWidth * (34 / screenPixelWidth),
        marginRight: screenWidth * (34 / screenPixelWidth),
        borderRadius: 8,
        backgroundColor: '#059033',
        height: screenHeight * (50 / screenPixelHeight),
        width: screenWidth * (288 / screenPixelWidth)
    },
    getStartedText: {
        fontFamily: 'rubik',
        fontSize: 17,
        color: '#fff',
        textAlign: 'center'
    }
}

export default WelcomeScreen;