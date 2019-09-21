import { createAppContainer,createSwitchNavigator } from 'react-navigation'; //
import { createStackNavigator } from 'react-navigation-stack'
import React, { Component } from 'react'
import inputs from './inputs';
import Login from './Login';
import Memberarea from './Memberarea';
import Details from './Details';


 
 ///const App = createAppContainer(AppNavigator);
const Black_pink = createSwitchNavigator({
   Memberarea: { screen: Memberarea },
   inputs: { screen: inputs },
   Details: { screen: Details },
   Login: { screen: Login },


 
});
 const App = createAppContainer(Black_pink);
export default App
