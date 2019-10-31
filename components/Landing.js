import React		 				from 'react';
import Login 						from './Login.js'
import Home 						from './Home.js'
import Front						from './Front.js'
import LocationScreen 				from './LocationScreen.js'
import MyApp						from './MyDrawerNavigator.js'
import styles 						from './styles.js'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} 		from 'react-navigation'

const App = createAppContainer (createBottomTabNavigator (
  {
	  Home: {
		  screen: Home
	  },
	  LocationScreen: {
		  screen: LocationScreen
	  },
	  MyApp: {
		  screen: MyApp
	  }
  },
  {
    initialRouteName: 'MyApp'
  }
));

export default App;
