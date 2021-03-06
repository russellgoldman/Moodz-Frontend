import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { closeButtonWhite, introBackground } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWeight = 375;

class InterestScreen extends Component {
    _onExitPress = () => {
        this.props.navigation.goBack();
    }

    _goToCoreScreen = () => {
        var navigate = NavigationActions.navigate({
            routeName: 'CoreScreen',
          });
        this.props.navigation.navigate(navigate);
    }

    render() {
        const { 
            outerContainer, closeButtonStyle, titleText, buttonStyle, buttonTitleText, buttonDescriptionText
        } = styles;

        return (
            <ImageBackground source={introBackground} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={this._onExitPress}>
                        <Image source={closeButtonWhite} style={closeButtonStyle} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={outerContainer}>
                        <Text style={titleText}>{`What's your incentive?`}</Text>
                        <TouchableOpacity style={buttonStyle} onPress={this._goToCoreScreen}>
                            <Text style={buttonTitleText}>{`Track Consumption`}</Text>
                            <Text style={buttonDescriptionText}>
                                {`Keep track on your intake and health`}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonStyle} onPress={this._goToCoreScreen}>
                            <Text style={buttonTitleText}>{`Discover`}</Text>
                            <Text style={buttonDescriptionText}>
                                {`Learn more about what you try`}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonStyle} onPress={this._goToCoreScreen}>
                            <Text style={buttonTitleText}>{`Recommendations`}</Text>
                            <Text style={buttonDescriptionText}>
                                {`You never knew what you might like`}
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    closeButtonStyle: {
        marginTop: screenHeight * (55 / screenPixelHeight),
        height: screenHeight * (25 / screenPixelHeight),
        width: screenWidth * (25 / screenPixelWeight),
        marginLeft: screenWidth * (20 / screenPixelWeight),
    },
    titleText: {
        marginTop: screenHeight * ((230 - 100) / screenPixelHeight),
        fontFamily: 'rubik',
        fontSize: 20,
        marginBottom: screenHeight * (30 / screenPixelHeight),
        color: '#fff'
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: screenHeight * (20 / screenPixelHeight),
        marginLeft: screenWidth * (58 / screenPixelWeight),
        marginRight: screenWidth * (57 / screenPixelWeight),
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: screenHeight * (64 / screenPixelHeight),
        width: screenWidth * (260 / screenPixelWeight),
    },
    buttonTitleText: {
        fontFamily: 'rubik',
        fontSize: 17,
        color: '#2BEC6B',
        textAlign: 'center'
    },
    buttonDescriptionText: {
        marginTop: screenHeight * (5 / screenPixelHeight),
        fontFamily: 'rubik',
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginLeft: screenWidth * (20 / screenPixelWeight),
        marginRight: screenWidth * (20 / screenPixelWeight),
    }
}

export default InterestScreen;