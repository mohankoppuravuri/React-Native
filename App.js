import React 			from 'react';
import {  
	createSwitchNavigator, 
	createAppContainer 
} 						from 'react-navigation';

import Login 			from './components/Login.js'
import Landing			from './components/Landing.js'

const App = createAppContainer (createSwitchNavigator ({
	Landing: {
		screen : Landing
	} , 
	Login: {
		screen : Login
	}
},{
	initialRouteName: 'Landing'
}))

export default App;
