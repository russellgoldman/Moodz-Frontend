import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { cannabisPlant } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class HistoryRow extends Component {
    render() {
        const { 
            row, imageStyle, textStyle
        } = styles;

        return (
            <View style={row}>
                <Image source={cannabisPlant} resizeMode='contain' style={imageStyle} />
                <Text style={textStyle}>{this.props.vendorName}</Text>
                <Text style={textStyle}>{this.props.strainName}</Text>
            </View>
        );
    }
}

const styles = {
    row: {
        flexDirection: 'row',
        height: screenHeight * (70 / screenPixelHeight),
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        flex: 1,
        height: 60,
        width: 60,
    },
    textStyle: {
        fontFamily: 'rubik',
        fontSize: 16,
        flex: 1.2,
        textAlign: 'center'
    },
}

export default HistoryRow;