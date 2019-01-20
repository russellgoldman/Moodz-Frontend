import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Navbar } from '../components';
import { AddStrainContainer } from '../containers';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class AddStrainScreen extends Component {
    constructor() {
        super();
        this._setTotalHeightCallback = this._setTotalHeightCallback.bind(this);
    }
    
    state = {
        navbarHeight: 0,
    };

    _setTotalHeightCallback = (navbarHeight) => {
        this.setState({ navbarHeight });
    };


    render() {
        const {
            distance
        } = styles;

        return (
            <View>
                <Navbar setTotalHeight={this._setTotalHeightCallback}/>
                <View style={{ 
                    marginTop: screenHeight * ((597 - this.state.navbarHeight) / screenPixelHeight) 
                }}>
                    <AddStrainContainer navigation={this.props.navigation} />
                </View>
            </View>
        );
    }
}

const styles = {
};

export default AddStrainScreen;