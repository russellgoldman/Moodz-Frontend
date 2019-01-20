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

    _onGetStarted = () => {
        var navigate = NavigationActions.navigate({
            routeName: 'InterestScreen',
          });
        this.props.navigation.navigate(navigate);
    }

    render() {
        const { 
            topRow, closeButtonStyle, titleText, textInputContainer, textInputStyle, getStartedButton, getStartedText
        } = styles;

        return (
            <ImageBackground source={introBackground} style={{width: '100%', height: '100%'}}>
                <TouchableOpacity onPress={this._onExitPress}>
                    <Image source={closeButtonWhite} style={closeButtonStyle} resizeMode='contain' />
                </TouchableOpacity>
                <View style={topRow}>
                    <Text style={titleText}>Your info</Text>
                </View>
                <View style={{ 
                    marginTop: screenHeight * (100 / screenPixelHeight),
                    marginBottom: screenHeight * ((46 - 25) / screenPixelHeight)
                }}>
                    {this._renderGenderButtons()}
                </View>
                <View style={textInputContainer}>
                    <TextInput style={textInputStyle} onChangeText={(name) => this.setState({ name })} 
                        value={this.state.name} placeholder='Name' placeholderTextColor='#fff'
                        selectionColor='#fff' />
                </View>
                <View style={textInputContainer}>
                    <TextInput style={textInputStyle} onChangeText={(age) => this.setState({ age })} 
                        value={this.state.age} placeholder='Age' placeholderTextColor='#fff'
                        selectionColor='#fff' />
                </View>
                <View style={textInputContainer}>
                    <TextInput style={textInputStyle} onChangeText={(weight) => this.setState({ weight })} 
                        value={this.state.weight} placeholder='Weight' placeholderTextColor='#fff'
                        selectionColor='#fff' />
                </View>
                <TouchableOpacity style={getStartedButton} onPress={this._onGetStarted}>
                    <Text style={getStartedText}>Get Started</Text>
                </TouchableOpacity>
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
        fontFamily: 'rubik',
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
        fontFamily: 'rubik',
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
        fontFamily: 'rubik',
        fontSize: 17,
        color: '#2BEC6B'
    },
    textInputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginTop: screenHeight * (25 / screenPixelHeight),
        height: screenHeight * (55 / screenPixelHeight),
        width: screenWidth * (288 / screenPixelWidth),
        marginLeft: screenWidth * (44 / screenPixelWidth),
        marginRight: screenWidth * (43 / screenPixelWidth),
        borderRadius: 8,
    },
    textInputStyle: {
        height: screenHeight * (55 / screenPixelHeight),
        width: screenWidth * (288 / screenPixelWidth),
        borderRadius: 8,
        paddingLeft: screenWidth * (20 / screenPixelWidth),
        fontFamily: 'rubik',
        fontSize: 17,
        color: '#fff'
    },
    getStartedButton: {
        justifyContent: 'center',
        marginTop: screenHeight * (178 / screenPixelHeight),
        marginLeft: screenWidth * (34 / screenPixelWidth),
        marginRight: screenWidth * (34 / screenPixelWidth),
        borderRadius: 8,
        backgroundColor: '#059033',
        height: screenHeight * (50 / screenPixelHeight),
        width: screenWidth * (288 / screenPixelWidth)
    },
    getStartedText: {
        fontFamily: 'rubik',
        fontSize: 17,
        color: '#fff',
        textAlign: 'center'
    }
}

export default CreateProfileScreen;