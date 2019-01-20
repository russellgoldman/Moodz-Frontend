import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { 
    camera, cannabisUnselected, historySelected, historyUnselected, personalSelected, 
    personalUnselected, suggestedSelected, suggestedUnselected
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
                cannabisImg = cannabisUnselected;
                suggestedImg = suggestedUnselected;
                break;
            case 'personal':
                historyImg = historyUnselected;
                personalImg = personalSelected;
                cannabisImg = cannabisUnselected;
                suggestedImg = suggestedUnselected;
                break;
            case 'suggested':
                historyImg = historyUnselected;
                personalImg = personalUnselected;
                cannabisImg = cannabisSelected;
                suggestedImg = suggestedSelected;
                break;
        }

        const { outerContainer, imageStyle } = styles;

        return (
            <View style={outerContainer}>
                <TouchableOpacity>
                    <Image source={historyImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={personalImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={camera} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={cannabisImg} resizeMode='contain' style={imageStyle} />
                </TouchableOpacity>
                <TouchableOpacity>
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