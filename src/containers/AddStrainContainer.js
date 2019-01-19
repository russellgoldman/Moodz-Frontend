import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Navbar } from '../components';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWeight = 375;

class AddStrainContainer extends Component {
    render() {
        const {
            outerContainer,
        } = styles;

        return (
            <View style={outerContainer}>
                <Text>AddStrainContainer</Text>
            </View>
        );
    }
}

const styles = {
    outerContainer: {
        height: screenHeight * (215 / screenPixelHeight),
        width: screenWidth
    }
};

export default AddStrainContainer;