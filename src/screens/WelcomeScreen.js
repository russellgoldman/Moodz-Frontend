import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWeight = 375;

class WelcomeScreen extends Component {
    _getStarted = () => {
        var navigate = NavigationActions.navigate({
            routeName: 'InterestScreen',
          });
        this.props.navigation.navigate(navigate);
    };

    render() {
        const { 
            outerContainer, titleText, welcomeText, getStartedButton, getStartedText
        } = styles;

        return (
            <View style={outerContainer}>
                <Text style={titleText}>Hi!</Text>
                <Text style={welcomeText}>Welcome to Moodz. We are here to help you get best cannabis experince possible. Set you interests and start exploring.</Text>
                <TouchableOpacity style={getStartedButton} onPress={this._getStarted}>
                    <Text style={getStartedText}>Get Started</Text>
                </TouchableOpacity>
            </View>
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
        fontFamily: 'helvetica-neue-bold',
        fontSize: 36,
    },
    welcomeText: {
        marginTop: screenHeight * (38 / 769),
        fontFamily: 'helvetica-neue',
        fontSize: 14,
        marginLeft: screenWidth * (65 / screenPixelWeight),
        marginRight: screenWidth * (65 / screenPixelWeight),
        textAlign: 'center',
        lineHeight: 30
    },
    getStartedButton: {
        justifyContent: 'center',
        marginTop: screenHeight * (207 / screenPixelHeight),
        marginLeft: screenWidth * (34 / screenPixelWeight),
        marginRight: screenWidth * (34 / screenPixelWeight),
        borderRadius: 10,
        backgroundColor: '#000',
        height: screenHeight * (53 / screenPixelHeight),
        width: screenWidth * (307 / screenPixelWeight)
    },
    getStartedText: {
        fontFamily: 'helvetica-neue',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    }
}

export default WelcomeScreen;