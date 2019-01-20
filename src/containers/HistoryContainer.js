import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';
import { HistoryRow } from '../components';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const screenPixelHeight = 769;
const screenPixelWidth = 375;

class HistoryContainer extends Component {
    state = {
        baseAPI: 'https://noahhoupt.lib.id/moodz',
        strains: []
    }

    componentWillMount() {
        // gather strains
        fetch(this.state.baseAPI + '/strain')
            .then((res) => {
                var strains = JSON.parse(res._bodyText);
                this.setState({ strains });
            }
        );
    }

    _renderHistoryRows = () => {
        return this.state.strains.map((strainObj, index) => {
            const { vendor, strain } = strainObj;
            return (
                <HistoryRow key={index} vendorName={vendor} strainName={strain} />
            );
        });
    };

    render() {
        const { outerContainer, textStyle } = styles;

        return (
            <View style={{ flex: 1 }}>
                <Text style={textStyle}>Scanned Strains</Text>
                <View style={{ marginTop: 50 }} />
                <ScrollView>
                    {this._renderHistoryRows()}
                </ScrollView>
            </View>
            
        );
    }
}

const styles = {
    textStyle: {
        fontFamily: 'rubik',
        fontSize: 18,
        textAlign: 'center'
    }
}

export default HistoryContainer;