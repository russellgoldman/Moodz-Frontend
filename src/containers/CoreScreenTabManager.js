import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { 
    cameraSelected, cameraUnselected, cannabisSelected, cannabisUnselected, historySelected, 
    historyUnselected, personalSelected, personalUnselected, suggestedSelected, suggestedUnselected
 } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class CoreScreenTabManager extends Component {
    constructor() {
        /*
        props
        - selectedTabCallback - function (String selectedTab)
        */

        super();
        historyImg = historySelected;
        personalImg = personalUnselected;
        cameraImg = cameraUnselected;
        cannabisImg = cannabisUnselected;
        suggestedImg = suggestedUnselected;
    }

    state = {
        /* --- selectedTab options ---
            1. history
            2. personal
            3. camera
            4. cannabis
            5. suggested
        */
        selectedTab: 'history'
    }

    render() {
        // tab image changes
        switch (this.state.selectedTab) {
            case 'history':
                historyImg = historySelected;
                personalImg = personalUnselected;
                cameraImg = cameraUnselected;
                cannabisImg = cannabisUnselected;
                suggestedImg = suggestedUnselected;
                break;
            case 'personal':
                historyImg = historyUnselected;
                personalImg = personalSelected;
                cameraImg = cameraUnselected;
                cannabisImg = cannabisUnselected;
                suggestedImg = suggestedUnselected;
                break;
            case 'camera':
                historyImg = historyUnselected;
                personalImg = personalUnselected;
                cameraImg = cameraSelected;
                cannabisImg = cannabisUnselected;
                suggestedImg = suggestedUnselected;
                break;
            case 'cannabis':
                historyImg = historyUnselected;
                personalImg = personalUnselected;
                cameraImg = cameraUnselected;
                cannabisImg = cannabisSelected;
                suggestedImg = suggestedUnselected;
                break;
            case 'suggested':
                historyImg = historyUnselected;
                personalImg = personalUnselected;
                cameraImg = cameraUnselected;
                cannabisImg = cannabisUnselected;
                suggestedImg = suggestedSelected;
                break;
        }

        const { outerContainer, imageStyle } = styles;

        return (
            <View style={outerContainer}>
                <TouchableOpacity onPress={() => {
                    this.props.selectedTabCallback('history');
                    this.setState({ selectedTab: 'history' });
                }}>
                    <Image source={historyImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.selectedTabCallback('personal');
                    this.setState({ selectedTab: 'personal' });
                }}>
                    <Image source={personalImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.selectedTabCallback('camera');
                    this.setState({ selectedTab: 'camera' });
                }}>
                    <Image source={cameraImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.selectedTabCallback('cannabis');
                    this.setState({ selectedTab: 'cannabis' });
                }}>
                    <Image source={cannabisImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.props.selectedTabCallback('suggested');
                    this.setState({ selectedTab: 'suggested' });
                }}>
                    <Image source={suggestedImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    outerContainer: {
        top: screenHeight * (260 / screenPixelHeight),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageStyle: {
        height: 25,
        width: 25
    },
};

export default CoreScreenTabManager;