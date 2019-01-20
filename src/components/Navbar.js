import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;
const navbarTextHeight = 44;

class Navbar extends Component {
    componentWillMount() {
        if (this.props.setTotalHeight) {
            this.props.setTotalHeight(getStatusBarHeight() + navbarTextHeight);
        }
    }

    render() {
        const { 
            statusBar, titleContainer, titleStyle
         } = styles;

        return (
            <View>
                <View style={statusBar} />
                <View style={titleContainer}>
                    <Text style={titleStyle}>Moodz</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    statusBar: {
        height: getStatusBarHeight()
    },
    titleContainer: {
        borderBottomWidth: 2,
        borderColor: '#d6d7da',
        width: screenWidth,
        justifyContent: 'center',
        height: screenHeight * (navbarTextHeight / screenPixelHeight),
    },
    titleStyle: {
        fontFamily: 'helvetica-neue-bold',
        fontSize: 18,
        textAlign: 'center'
    }
}

export default Navbar;