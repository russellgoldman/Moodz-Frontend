import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ImageBackground, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { coreBackground, johnDoe } from '../../assets/images';
import { AddStrainContainer, CoreScreenTabManager, HistoryContainer } from '../containers';

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
        selectedTab: 'history',
        recommendedStrain: '',
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
            <View style={{ marginTop: screenHeight * (50 / screenPixelHeight) }}>
                <HistoryContainer />
            </View>
        );
    }

    _renderPersonalTab = () => {
        return (
            <View style={{ marginTop: screenHeight * (50 / screenPixelHeight) }}>
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
            <View style={{ marginTop: screenHeight * (50 / screenPixelHeight) }}>
                <Text>Cannabis tab</Text>
            </View>
        );
    }

    _renderSuggestedTab = () => {
        fetch('https://noahhoupt.lib.id/moodz/recommendation')
            .then((res) => {
                this.setState({ recommendedStrain: JSON.parse(res._bodyText) });
            });

        return (
            <View style={{ marginTop: screenHeight * (50 / screenPixelHeight) }}>
                <Text style={{ 
                    fontFamily: 'rubik',
                    fontSize: 24,
                    textAlign: 'center',
                    marginBottom: 20
                 }}>Suggested Strain</Text>
                <Text style={{ 
                    fontFamily: 'rubik',
                    fontSize: 18,
                    textAlign: 'center'
                 }}>{this.state.recommendedStrain}</Text>
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