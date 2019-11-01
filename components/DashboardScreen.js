import React, { Component } from 'react';
import { View,
		SafeAreaView,
		Text, 
		StyleSheet, 
		Button,
	ScrollView} from 'react-native';
import {Image}  from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drop from './Drop.js'
import styles from './styles'
export default class DashboardScreen extends Component {  
	static navigationOptions = ({ navigation }) => ({  
		headerTitle: 'Sample Form',
		headerLeft:()=> (
                     <Ionicons
                         style={{ paddingLeft: 10 }}
                         onPress={() => navigation.openDrawer()}
                         name="md-menu"
                         size={20}
                     />),
    });  
  
    render() {  
        return (  
			<>
			<SafeAreaView>
				<ScrollView>
				<View style={styles.body}>
					<View style={{flex:1}}>
						<Drop />
						<Drop />
						<Drop />
						<Drop />
					</View>
				</View>
				</ScrollView>
			</SafeAreaView>
	</>
        );  
    }  
}  
