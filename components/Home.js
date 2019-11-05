import React 				from 'react';
import Login 				from './Login.js'
import styles 				from './styles.js'
import ImagePicker 			from 'react-native-image-picker'

import { Avatar,
		Card,
		Icon
				} 			from 'react-native-elements';

import { 
	View,					
	Text,					
	AsyncStorage,			
	Button,					
} 							from 'react-native';
							
import { 
	createSwitchNavigator, 	
	createAppContainer 
} 							from 'react-navigation';

import CardView 			from './CardView.js'
export default class Home extends React.Component {
	constructor () {
		super ();
		this.state = {
			value : 'false',
			image : ''
		};

		this._retrieveData = this._retrieveData.bind(this);
		this._removeData   = this._removeData.bind(this);
	}


	_retrieveData = async () => {
		try {
			const value = await AsyncStorage.getItem ('logged') || 'none';
			const image = await AsyncStorage.getItem ('image') || 'none';

			if (value == 'none')
				this.props.navigation.navigate('Login')

			this.setState ({
				value: value,
				image: image
			});
		} catch (error) {
			console.log ('Could not fetch the data');
			console.log (error)
		}
	};

	_removeData = async () => {
		try {
			await AsyncStorage.removeItem('logged');
			await AsyncStorage.removeItem('image');
			
			this.props.navigation.navigate('Login')

		} catch (error) {
			console.log('could not log out');
		}
	};

	UNSAFE_componentWillMount () {
		this._retrieveData ();
	}
    
	render () {
		let latitude = this.props.navigation.getParam ('latitude');
		let longitude = this.props.navigation.getParam ('longitude');

				console.log ('======', this.props.navigation.getParam ('latitude'));
		return(
			<View>	
				<Avatar
					size="large"
					rounded
					title="CR"
					source = {{uri:this.state.image}}
					onPress={() => console.log("Works!")}
					activeOpacity={0.7}
				/>
				<Text style = { styles.sectionTitle } > Hello { this.state.value } </Text>

				<View style = {styles.sectionContainer} >
					<Button title = "Log Out" 
						onPress = { () => this._removeData() }
					/>
				</View>

				<CardView latitude = {latitude} longitude = {longitude}/>
		</View>			
		);
	}
};
