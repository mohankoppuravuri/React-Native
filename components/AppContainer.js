import React, { Component } 					from 'react';
import { View,
		 Text,
		 StyleSheet,
		 Button } 								from 'react-native';
import Icon 									from 'react-native-vector-icons/Ionicons';

import AntDesign 								from 'react-native-vector-icons/AntDesign';
import WelcomeScreen 							from './WelcomeScreen.js'
import DashboardScreen  						from './DashboardScreen.js'


import {
    createSwitchNavigator,
    createAppContainer,

} 												from 'react-navigation';
import {createDrawerNavigator}   				from 'react-navigation-drawer'
import {createStackNavigator }					from 'react-navigation-stack';
//import Icon from 								from  'react-native-vector-icons/Ionicons'
const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
	},


);

const WelcomeStackNavigator = createStackNavigator(
    {
        WelcomeNavigator: WelcomeScreen
    },
    
);
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
		screen: DashboardStackNavigator,
		navigationOptions: {
			drawerLabel: 'New Form',
			drawerIcon: ({ tintColor }) => (
				<AntDesign name="form" size={24} style={{ color: tintColor }} />
				),
    },
    },
    Welcome: {
		screen: WelcomeStackNavigator,
		navigationOptions: {
			drawerLabel: 'Submitted Samples',
			drawerIcon: ({ tintColor }) => (
				<Icon name="md-trending-up" size={24} style={{ color: tintColor }} />
				),
    },
    },
});

const AppContainer = createAppContainer(AppDrawerNavigator);
export default AppContainer;
