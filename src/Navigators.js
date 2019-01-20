import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    WelcomeScreen,
    InterestScreen,
    ProfileScreen,
    AddStrainScreen,
    CameraScreen
} from './screens';

const RootStack = createStackNavigator(
  {
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
        header: null
        }
    },
    InterestScreen: {
        screen: InterestScreen,
        navigationOptions: {
            header: null
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null
        }
    },
    AddStrainScreen: {
        screen: AddStrainScreen,
        navigationOptions: {
            header: null
        }
    },
    CameraScreen: {
        screen: CameraScreen,
        navigationOptions: {
            header: null
        }
    }
  },
{
  initialRouteName: 'AddStrainScreen',
});

const Main = createAppContainer(RootStack);
export default Main;