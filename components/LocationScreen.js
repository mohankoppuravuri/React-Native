import React 						from 'react'
import {
	StyleSheet, 
	View,
	Button,
} 									from 'react-native'
import MapView, { PROVIDER_GOOGLE,
				  Marker, 
						 }    		from 'react-native-maps';
import Geolocation 					from '@react-native-community/geolocation';
export default class LocationScreen extends React.Component {
	constructor (){
		super();
		this.state = {
			latitude: 0,
			longitude: 0
		}

		this.findMyLocation = this.findMyLocation.bind(this);
		
	}
	findMyLocation () {
		Geolocation.getCurrentPosition(
			(position) => {
				this.setState({
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					error: null,
				});
			},
			(error) => this.setState({ error: error.message }),
			{ enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
		);
		console.log ('Location Updated');
	}

	onPressHandler = () => {
		this.findMyLocation ();
		//this.props.navigation.setParams ({
		//	latitude: this.state.latitude,
		//	longitude: this.state.longitude
		//});
		//console.log (this.props.navigation.getParam('latitude'));
		this.props.navigation.navigate('Home', {
		
			latitude: this.state.latitude,
			longitude: this.state.longitude

		
		});
		
	};

	render (){
		
		return (
		<View style = {styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE} // remove if not using Google Maps
				style={styles.map}
				region={{
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				latitudeDelta: 0.015,
				longitudeDelta: 0.0121,
				}}
			>
				<Marker
					coordinate={{ latitude: this.state.latitude , longitude: this.state.longitude}}
					title= ''
					description=''
				/>
			</MapView>	
			<Button title = 'Find My Locaiton' onPress = {this.onPressHandler}> </Button>
	</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
});





