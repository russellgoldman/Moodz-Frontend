import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import cacheAssetsAsync from './src/cacheAssetsAsync';

import Main from './src/Navigators';

export default class App extends Component {
  state = {
    appIsReady: false
  };
  
  componentWillMount() {
    this._loadAssetsAsync();
    StatusBar.setBarStyle('light-content', true);
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/closeButton.png'),
          require('./assets/images/closeButtonWhite.png'),
          require('./assets/images/takePicture.png'),
          require('./assets/images/introBackground.png'),
          require('./assets/images/historySelected.png'),
          require('./assets/images/historyUnselected.png'),
          require('./assets/images/coreBackground.png'),
          require('./assets/images/johnDoe.png'),
          require('./assets/images/personalSelected.png'),
          require('./assets/images/personalUnselected.png'),
          require('./assets/images/suggestedSelected.png'),
          require('./assets/images/suggestedUnselected.png'),
          require('./assets/images/cameraSelected.png'),
          require('./assets/images/cameraUnselected.png'),
          require('./assets/images/cannabisSelected.png'),
          require('./assets/images/cannabisUnselected.png'),
        ],
        fonts: [
          {
            'helvetica-neue-bold': require('./assets/fonts/HelveticaNeue-Bold.ttf'),
            'helvetica-neue-light': require('./assets/fonts/HelveticaNeue-Light.ttf'),
            'helvetica-neue-medium': require('./assets/fonts/HelveticaNeue-Medium.ttf'),
            'helvetica-neue-thin': require('./assets/fonts/HelveticaNeue-Thin.ttf'),
            'helvetica-neue': require('./assets/fonts/HelveticaNeue.ttf'),
            'rubik': require('./assets/fonts/Rubik-Regular.ttf')
          }
        ]
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' + 
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }

  render() {
    if (this.state.appIsReady) {
      return (
        <Main />
      );
    }
    return <AppLoading />;
  }
};
