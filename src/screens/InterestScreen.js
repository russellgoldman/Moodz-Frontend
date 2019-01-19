import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { closeButton } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWeight = 375;

class InterestScreen extends Component {
    render() {
        const { 
            outerContainer, closeButtonStyle, titleText, buttonStyle, buttonTitleText, buttonDescriptionText
        } = styles;

        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity>
                    <Image source={closeButton} style={closeButtonStyle} resizeMode='contain' />
                </TouchableOpacity>
                <View style={outerContainer}>
                    <Text style={titleText}>{`What's your interest?`}</Text>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTitleText}>{`Track Consumption`}</Text>
                        <Text style={buttonDescriptionText}>
                            {`Lorem ipsum dolor sit amet, et lucilius scribentur per, cu qui error corpora detraxit. Ex quodsi ocurreret necessitatibus usu.`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTitleText}>{`Learn More`}</Text>
                        <Text style={buttonDescriptionText}>
                            {`Lorem ipsum dolor sit amet, et lucilius scribentur per, cu qui error corpora detraxit. Ex quodsi ocurreret necessitatibus usu.`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={buttonStyle}>
                        <Text style={buttonTitleText}>{`Receive Recommendations`}</Text>
                        <Text style={buttonDescriptionText}>
                            {`Lorem ipsum dolor sit amet, et lucilius scribentur per, cu qui error corpora detraxit. Ex quodsi ocurreret necessitatibus usu.`}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        fontFamily: 'helvetica-neue-bold',
        fontSize: 30,
        marginBottom: screenHeight * (30 / screenPixelHeight),
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: screenHeight * (20 / screenPixelHeight),
        marginLeft: screenWidth * (58 / screenPixelWeight),
        marginRight: screenWidth * (57 / screenPixelWeight),
        borderRadius: 10,
        backgroundColor: '#000',
        height: screenHeight * (64 / screenPixelHeight),
        width: screenWidth * (260 / screenPixelWeight),
    },
    buttonTitleText: {
        fontFamily: 'helvetica-neue',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    buttonDescriptionText: {
        marginTop: screenHeight * (5 / screenPixelHeight),
        fontFamily: 'helvetica-neue',
        fontSize: 10,
        color: '#fff',
        textAlign: 'center',
        marginLeft: screenWidth * (20 / screenPixelWeight),
        marginRight: screenWidth * (20 / screenPixelWeight),
    }
}

export default InterestScreen;