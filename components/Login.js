import React 			from 'react';
import styles 			from './styles.js';
import ImagePicker 		from 'react-native-image-picker';
import { Avatar } 		from 'react-native-elements';

import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';

export default class Login extends React.Component {
	constructor (){
		super ();
		this.state={
			name: '',
			image: '' 
		}
		this._storeData = this._storeData.bind(this);
	}
	_storeData = async () => {
		try {

			if (this.state.name == '')
			{	
				Alert.alert(
					'',
					'Please fill name field',
					[
						{text: 'OK', onPress: () => console.log('OK Pressed')},
					],
					{cancelable: false},
				);
			return;
			}


			if (this.state.image == '')
			{	
				Alert.alert(
					'Please fill all data',
					'Please upload image',
					[
						{text: 'OK', onPress: () => console.log('OK Pressed')},
					],
					{cancelable: false},
				);
			return;
			}
				await AsyncStorage.setItem('logged', this.state.name);
				await AsyncStorage.setItem('image', this.state.image.uri );
				this.props.navigation.navigate('Landing')
				console.log('successfully send the data');

  		} catch (error) {
   				console.log('error saving data') 
				console.log(error)
  		}
	};

	handleImage = () =>{
		const options ={};
		ImagePicker.launchImageLibrary(options, response => {
			this.setState (prevState => 
				{return {name: prevState.name,
					image: response
				}})
		})

	}
	render() {
  			return (
    			<>
				<SafeAreaView>
					<ScrollView>
						<View style = {{alignItems: 'center'}}>		
							<Avatar
								size="xlarge"
								rounded
								title =  'MKS'
								source = {this.state.image}
								onPress={() => console.log("Works!")}
								activeOpacity={0.7}
							/>	 
						</View>
						<View>
							<Button title = 'Choose photo'
								onPress = {this.handleImage}	/>			
						</View>
						<View style={styles.body}>

							<View style={styles.sectionContainer}>

								<Text style={styles.sectionTitle}>Name</Text>

								<TextInput  placeholder = {'Enter your name here ...'}

									style = {{ height: 40, borderColor: 'gray', borderWidth: 1 }}

									onChangeText = {text => this.setState (prevState =>
									{return {name: text,
									image : prevState.image};
									})
									}/>	  
							</View>


							<View style = {styles.sectionContainer}>
								<Button
									title = "Login"
									onPress = { () => this._storeData() }
								/>
							</View>

						</View>
					</ScrollView>
				</SafeAreaView>
		</>
  );
	}
};
