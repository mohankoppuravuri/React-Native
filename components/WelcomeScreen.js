import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class WelcomeScreen extends Component {  
	static navigationOptions=({ navigation }) =>({  
		title: 'My Customers', 	
		headerLeft:()=> (
                     <Icon
                         style={{ paddingLeft: 10 }}
                         onPress={() => navigation.openDrawer()}
						 name="md-menu"
                         size={20}
                     />),
 
	});  
    render() {  
		return (
				<Text> Hii </Text> 
        );  
    }  
}  
