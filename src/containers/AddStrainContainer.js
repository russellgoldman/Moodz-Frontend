import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Navbar } from '../components';
import { Camera, Permissions } from 'expo';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class AddStrainContainer extends Component {
    constructor() {
        /*
            props
            - navigatation (passed from AddStrainScreen)
        */
        super();
    }

    _launchCamera = () => {
        var navigate = NavigationActions.navigate({
            routeName: 'CameraScreen',
        });
        this.props.navigation.navigate(navigate);
    };

    render() {
        const {
            outerContainer, titleContainer, titleStyle, buttonRow
        } = styles;

        return (
            <View style={outerContainer}>
                <View style={titleContainer}>
                    <Text style={titleStyle}>Add Strain</Text>
                </View>
                <View style={buttonRow}>
                    <TouchableOpacity onPress={this._launchCamera}>
                        <Text style={{ marginRight: screenWidth * (30 / screenPixelWidth) }}>Take picture</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: screenWidth * (30 / screenPixelWidth) }}>Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    outerContainer: {
        height: screenHeight * (215 / screenPixelHeight),
        width: screenWidth
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderColor: '#d6d7da',
        width: screenWidth,
        paddingTop: screenHeight * (15 / screenPixelHeight)
    },
    titleStyle: {
        fontFamily: 'helvetica-neue-bold',
        fontSize: 21,
        textAlign: 'center'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight * (80 / screenPixelHeight)
    }
};

export default AddStrainContainer;