import React   				 from 'react'
import {Picker,
		View,
		Text,
		Button,
}							from 'react-native'  

export default class Drop extends React.Component {
	constructor (){
		super ()
		this.state = {
		language : ''
		}
	}
	render(){
		const option = ['Customer Name',
			'Complex Name']
		return(
			<View >
			<Picker
				selectedValue={this.state.language}
			
				itemTextStyle={{fontSize: 15}}
				activeItemTextStyle={{fontSize: 18, fontWeight: 'bold'}}
				onValueChange={(itemValue, itemIndex) =>
				this.setState({language: itemValue})
				}
                
			>
				
				{ option.map(i => 
				(<Picker.Item label = {i} value= {i}/>)
				)}
				 
			</Picker>
		</View>
		);
	}
}
