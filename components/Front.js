import React 			from 'react';
import styles 			from './styles.js';
import ImagePicker 		from 'react-native-image-picker';
import { Image }		from 'react-native-elements'
import {
 
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
export default class Login extends React.Component {
	constructor (){
		super ();
		this.state={
			name: '',
			password: '' 
		}
	}
	render() {
  			return (
    			
				<SafeAreaView>
					<ScrollView>
						<View style={styles.body}>
							<View>
							<Image
								source={{ uri: 'https://www.boehringer-ingelheim.com/sites/default/files/boehringer-ingelheim.jpg' }}
								style={{ width: 380, height: 130 }}
							/>
					</View>
							<View style={styles.sectionContainer}>
								<TextInput  placeholder = {'User Name'}
									style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
									onChangeText = {text => this.setState (prevState =>
									{return {name: text,
									password : prevState.password};
									})
									}/>	  
							</View>
					
							<View style={styles.sectionContainer}>
								<TextInput  placeholder = {'Password'}
									style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}
									onChangeText = {text => this.setState (prevState =>
									{return {name: prevState.name,
									password : text};
									})
									}/>	  
							</View>
							<View style = {styles.sectionContainer}>
								<Button
									title = "Login"
									onPress = { () => this.props.navigation.navigate('AppContainer') }
								/>
							</View>
						</View>
					</ScrollView>
				</SafeAreaView>
	
  );
	}
};
