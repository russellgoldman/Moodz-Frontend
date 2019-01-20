import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ImageBackground, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { coreBackground, johnDoe } from '../../assets/images';
import { AddStrainContainer, CoreScreenTabManager } from '../containers';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class CoreScreen extends Component {
    constructor() {
        super();
        this._selectedTabCallback = this._selectedTabCallback.bind(this);
    }

    state = {
        selectedTab: 'history'
    }

    _selectedTabCallback = (selectedTab) => {
        this.setState({ selectedTab });
    };

    _renderTabContent = () => {
        switch (this.state.selectedTab) {
            case 'history':
                return this._renderHistoryTab();
            case 'personal':
                return this._renderPersonalTab();
            case 'camera':
                return this._renderCameraTab();
            case 'cannabis':
                return this._renderCannabisTab();
            case 'suggested':
                return this._renderSuggestedTab();
        }
    }

    _renderHistoryTab = () => {
        return (
            <View style={{ marginTop: screenHeight * (100 / screenPixelHeight) }}>
                <Text>History tab</Text>
            </View>
        );
    }

    _renderPersonalTab = () => {
        return (
            <View>
                <Text>Personal tab</Text>
            </View>
        );
    }

    _renderCameraTab = () => {
        return (
            <View style={{ marginTop: screenHeight * (100 / screenPixelHeight) }}>
                <AddStrainContainer navigation={this.props.navigation} />
            </View>
        );
    }

    _renderCannabisTab = () => {
        return (
            <View>
                <Text>Cannabis tab</Text>
            </View>
        );
    }

    _renderSuggestedTab = () => {
        return (
            <View>
                <Text>Suggested</Text>
            </View>
        );
    }

    render() {
        const { 
            johnDoeImageStyle, johnDoeTextStyle
        } = styles;

        return (
            <ImageBackground source={coreBackground} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', marginTop: screenHeight * (106 / screenPixelHeight) }}>
                    <Image source={johnDoe} resizeMode='contain' style={johnDoeImageStyle} />
                    <Text style={johnDoeTextStyle}>John Doe</Text>
                    {this._renderTabContent()}
                </View>
                <CoreScreenTabManager selectedTabCallback={this._selectedTabCallback} />
            </ImageBackground>
        );
    }
}

const styles = {
    johnDoeImageStyle: {
        height: 70,
        width: 70
    },
    johnDoeTextStyle: {
        marginTop: screenHeight * (12 / screenPixelHeight),
        fontFamily: 'rubik',
        fontSize: 20,
        color: '#fff'
    }
}

export default CoreScreen;