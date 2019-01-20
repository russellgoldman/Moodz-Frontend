import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Image, ImageBackground, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { closeButtonWhite, introBackground } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class CreateProfileScreen extends Component {
    state = {
        gender: 'Male',
        name: '',
        age: '',
        weight: ''
    }

    _onExitPress = () => {
        this.props.navigation.goBack();
    }

    _renderGenderButtons = () => {
        const { 
            genderButtonSelected, genderTextSelected, genderButtonUnselected, genderTextUnselected
         } = styles;

        if (this.state.gender === 'Male') {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={genderButtonSelected} onPress={() => {
                        this.setState({ gender: 'Male' });
                    }}>
                        <Text style={genderTextSelected}>MALE</Text>
                    </TouchableOpacity>
                    <View style={{ width: screenWidth * (23 / screenPixelWidth) }} />
                    <TouchableOpacity style={genderButtonUnselected} onPress={() => {
                        this.setState({ gender: 'Female' });
                    }}>
                        <Text style={genderTextUnselected}>FEMALE</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={genderButtonUnselected} onPress={() => {
                        this.setState({ gender: 'Male' });
                    }}>
                        <Text style={genderTextUnselected}>MALE</Text>
                    </TouchableOpacity>
                    <View style={{ width: screenWidth * (23 / screenPixelWidth) }} />
                    <TouchableOpacity style={genderButtonSelected} onPress={() => {
                        this.setState({ gender: 'Female' });
                    }}>
                        <Text style={genderTextSelected}>FEMALE</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }

    render() {
        const { 
            topRow, closeButtonStyle, titleText, textInputStyle
        } = styles;

        return (
            <ImageBackground source={introBackground} style={{width: '100%', height: '100%'}}>
                <TouchableOpacity onPress={this._onExitPress}>
                    <Image source={closeButtonWhite} style={closeButtonStyle} resizeMode='contain' />
                </TouchableOpacity>
                <View style={topRow}>
                    <Text style={titleText}>Your info</Text>
                </View>
                <View style={{ marginTop: screenHeight * (100 / screenPixelHeight) }}>
                    {this._renderGenderButtons()}
                </View>
                <TextInput style={textInputStyle} onChangeText={(name) => this.setState({ name })} 
                    value={this.state.name} />
                <TextInput style={textInputStyle} onChangeText={(age) => this.setState({ age })} 
                    value={this.state.age} />
                <TextInput style={textInputStyle} onChangeText={(weight) => this.setState({ weight })} 
                    value={this.state.weight} />
            </ImageBackground>
        );
    }
}

const styles = {
    topRow: {
        flexDirection: 'row',
        height: screenHeight * (20 / screenPixelHeight),
        width: screenWidth,
        marginTop: screenHeight * (30 / screenPixelHeight),
    },
    closeButtonStyle: {
        height: screenHeight * (25 / screenPixelHeight),
        width: screenWidth * (25 / screenPixelWidth),
        top: screenHeight * (55 / screenPixelHeight),
        marginLeft: screenWidth * (20 / screenPixelWidth),
    },
    titleText: {
        flex: 1,
        fontFamily: 'helvetica-neue',
        fontSize: 20,
        color: '#fff',
        textAlign: 'center'
    },
    genderButtonSelected: {
        justifyContent: 'center', 
        alignItems: 'center',
        height: screenHeight * (50 / screenPixelHeight),
        width: screenWidth * (128 / screenPixelWidth),
        backgroundColor: '#2BEC6B',
        borderRadius: 8,
    },
    genderTextSelected: {
        fontFamily: 'helvetica-neue',
        fontSize: 17,
        color: '#fff'
    },
    genderButtonUnselected: {
        justifyContent: 'center', 
        alignItems: 'center',
        height: screenHeight * (50 / screenPixelHeight),
        width: screenWidth * (128 / screenPixelWidth),
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 8
    },
    genderTextUnselected: {
        fontFamily: 'helvetica-neue',
        fontSize: 17,
        color: '#2BEC6B'
    },
    textInputStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: screenHeight * (55 / screenPixelHeight),
        width: screenWidth * (288 / screenPixelWidth),
        marginLeft: screenWidth * (44 / screenPixelWidth),
        marginRight: screenWidth * (43 / screenPixelWidth)
    }
}

export default CreateProfileScreen;