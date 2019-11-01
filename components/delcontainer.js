import React, { Component } 					from 'react';
import { View,
		 Text,
		 StyleSheet,
		 Button } 								from 'react-native';
import Icon 									from 'react-native-vector-icons/Ionicons';
import WelcomeScreen 							from './WelcomeScreen.js'
import DashboardScreen  						from './DashboardScreen.js'


import {
    createSwitchNavigator,
    createAppContainer,

} 												from 'react-navigation';
import {createDrawerNavigator}   				from 'react-navigation-drawer'
import {createStackNavigator }					from 'react-navigation-stack';

const DashboardStackNavigator = createStackNavigator(
    {
        DashboardNavigator: DashboardScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.openDrawer()}
                    name="md-reorder"
                    size={30}
                />
            )
        };
        }
    }
);

const WelcomeStackNavigator = createStackNavigator(
    {
        WelcomeNavigator: WelcomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        onPress={() => navigation.openDrawer()}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
   }
);
const AppDrawerNavigator = createDrawerNavigator({
    Dashboard: {
        screen: DashboardStackNavigator
    },
    Welcome: {
        screen: WelcomeStackNavigator
    },
});

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: AppDrawerNavigator },
    Welcome: { screen: WelcomeScreen },

});
const AppContainer = createAppContainer(AppSwitchNavigator);
export default AppContainer;
