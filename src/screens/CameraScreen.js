import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Camera, Permissions } from 'expo';
import { closeButton, closeButtonWhite, takePicture } from '../../assets/images';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class CameraScreen extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    _onFlipButtonPress = () => {
        this.setState({
            type: this.state.type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back,
        });
    }

    _onExitButtonPress = () => {
        this.props.navigation.goBack();
    }

    _takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync({ quality: 0.8, base64: true, fixOrientation: true, width: this.maxSize });
            // MAKE CALL TO API WITH PHOTO
            console.log(photo);

            Alert.alert('Photo taken!');

            setTimeout(() => {
                this.props.navigation.goBack();
            }, 1000);
        }
    };

    render() {
        const { 
            outerContainer, topRow, closeButtonImage, bottomRow, flipButtonContainer, flipTextStyle, 
            takePictureContainer, takePictureImage 
        } = styles;

        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={(ref) => this.camera = ref }>
                        <View style={outerContainer}>
                            <View style={topRow}>
                                <TouchableOpacity onPress={this._onExitButtonPress}>
                                    <Image resizeMode='contain' source={closeButtonWhite} style={closeButtonImage} />
                                </TouchableOpacity>
                            </View>
                            <View style={bottomRow}>
                                <TouchableOpacity style={flipButtonContainer} onPress={this._onFlipButtonPress}>
                                    <Text style={flipTextStyle}>Flip</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={takePictureContainer} onPress={this._takePicture}>
                                    <Image source={takePicture} resizeMode='contain' style={takePictureImage}/>
                                </TouchableOpacity>
                                <View style={{ flex: 1 }}/>
                            </View>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = {
    outerContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    topRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: screenHeight * (50 / screenPixelHeight),
        marginLeft: screenWidth * (10 / screenPixelWidth),
        marginRight: screenWidth * (10 / screenPixelWidth),
    },
    closeButtonImage: {
        height: 30,
        width: 30,
        marginLeft: screenWidth * (15 / screenPixelWidth),
    },
    bottomRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: screenHeight * (50 / screenPixelHeight),
        marginLeft: screenWidth * (10 / screenPixelWidth),
        marginRight: screenWidth * (10 / screenPixelWidth),
    },
    flipButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flipTextStyle: {
        fontFamily: 'helvetica-neue',
        fontSize: 20, 
        marginBottom: 10, 
        color: 'white',
        marginBottom: screenHeight * (20 / screenPixelHeight),
    },
    takePictureContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    takePictureImage: {
        height: 70,
        width: 70
    }
}

export default CameraScreen;