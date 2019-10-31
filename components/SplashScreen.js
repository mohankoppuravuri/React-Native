import React from 'react'
import {View, Image} from 'react-native'

export default class SplashScreen extends React.Component {

	render(){
		return(
			<View>
				<Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
					style = {{ width: 200, height: 200 }}
				/>
			</View>
		);
	}

}
