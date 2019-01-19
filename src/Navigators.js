import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import {
    ExampleScreen,
} from './screens';

const RootStack = createStackNavigator(
  {
    App: {
      screen: ExampleScreen,
      navigationOptions: {
        header: null
      }
    },
  },
{
  initialRouteName: 'App',
});

const Main = createAppContainer(RootStack);
export default Main;