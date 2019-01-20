import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    WelcomeScreen,
    CreateProfileScreen,
    InterestScreen,
    CoreScreen,
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
    CreateProfileScreen: {
        screen: CreateProfileScreen,
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
    CoreScreen: {
        screen: CoreScreen,
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
  initialRouteName: 'WelcomeScreen',
});

const Main = createAppContainer(RootStack);
export default Main;