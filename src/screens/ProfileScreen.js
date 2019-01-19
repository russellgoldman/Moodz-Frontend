import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Navbar } from '../components';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWeight = 375;

class ProfileScreen extends Component {
    _getStarted = () => {
        var navigate = NavigationActions.navigate({
            routeName: 'InterestScreen',
          });
        this.props.navigation.navigate(navigate);
    };

    render() {
        const { 
            outerContainer
        } = styles;

        return (
            <View style={outerContainer}>
                <Navbar />
            </View>
        );
    }
}

const styles = {
    outerContainer: {
        flex: 1,
        alignItems: 'center',
    },
}

export default ProfileScreen;