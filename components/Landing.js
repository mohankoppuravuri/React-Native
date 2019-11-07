import React		 				from 'react';
import Login 						from './Login.js';
import Home 						from './Home.js';
import LocationScreen 				from './LocationScreen.js';
import styles 						from './styles.js';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} 		from 'react-navigation';

import Pdf 							from './Pdf.js';
const App = createAppContainer (createBottomTabNavigator (
	{
	  Home: {
		  screen: Home
	  },
	  LocationScreen: {
		  screen: LocationScreen
	  },
	  Pdf: {
	  	  screen: Pdf
	  },
	},
	{
		initialRouteName: 'Pdf'
	}
));

export default App;
