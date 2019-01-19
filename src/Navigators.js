import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    WelcomeScreen,
    InterestScreen
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
    }
  },
{
  initialRouteName: 'InterestScreen',
});

const Main = createAppContainer(RootStack);
export default Main;