import React, { Component } 					from 'react';  
import { View,
		 Text, 
		 StyleSheet,
		 Button } 								from 'react-native';  
import Front									from './components/Front.js'
import AppContainer								from './components/AppContainer.js'

import {createSwitchNavigator, 
   		createAppContainer 
    }					                        from 'react-navigation';
//r SplashScreen = require('@remobile/react-native-splashscreen')
const App =  createAppContainer(createSwitchNavigator({
	Front: {
	screen: Front
	},
	AppContainer: {
	screen: AppContainer
	}
},
	{
		initialRouteName:  'Front'
	}
))   
export default App;
	


