import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
// import ScreenThree from './ScreenThree';
import Camera from './Camera'

export default class App extends React.Component{
  render(){
    return(
        <AppNav />
    )
  }

}
const AppNav = createStackNavigator({
    ScreenOne: { screen: ScreenOne},
    ScreenTwo: { screen: ScreenTwo},
    Camera: {screen: Camera}
})

// export default App;