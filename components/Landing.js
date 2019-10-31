import React		 				from 'react';
import Farm 						from './Farm.js'
import styles 						from './styles.js'
import {createAppContainer} 		from 'react-navigation'
import { createStackNavigator } 	from 'react-navigation-stack';
import  Test						from './Test'
const App = createAppContainer (createStackNavigator (
  {
	  Test: {
		  screen: Test
	  },
	  Farm: {
		  screen: Farm,
	  }
  },
  {
    initialRouteName: 'Farm'
  }
));

export default App;
