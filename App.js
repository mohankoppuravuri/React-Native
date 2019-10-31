import React 			from 'react';
import {  
	createSwitchNavigator, 
	createAppContainer 
} 						from 'react-navigation';

import Login 			from './components/Login.js'
import Landing			from './components/Landing.js'
import SplashScreen 	from './components/SplashScreen.js'

const App = createAppContainer (createSwitchNavigator ({
	Landing: {
		screen : Landing
	} , 
	Login: {
		screen : Login
	}, 
	SplashScreen: {
		screen : SplashScreen
	}

},{
	initialRouteName: 'Landing'
}))

export default App;
