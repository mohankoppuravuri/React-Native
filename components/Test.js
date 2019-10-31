import React 	from 'react';
import {Text,
		View,
		TextInput}	from 'react-native';
import AntDesign            from 'react-native-vector-icons/AntDesign'

export default class Test extends React.Component {
	static navigationOptions = {
			title : 'Requested Tests'
	}

	constructor (){
		super ()
		this.state = {
			tests:  [],
			name: ''
		}
	}
	render (){
		return (
			<View> 
				{this.state.tests.map(i => 
				(<View style = {{flexDirection:'row' }}>
					 <Text> {i}</Text>
			
					<AntDesign name = 'delete' size ={24}
						onPress = {()=>{this.setState((prevState)=>{
						return {tests: prevState.tests.filter(data=>{ if (data !== i)
						return data}),
						name: ''}})}}/>
				</View>))}


			<View style = {{flexDirection: 'row'}}>
				<AntDesign name = "plus" size = {24}
					onPress = {()=>{this.textInput.clear()
					this.setState(prevState =>
					{return {tests: prevState.tests.concat(this.state.name),
							 name: ''
					};
					})}
					}
				/>

			<TextInput   ref =       {input => { this.textInput = input } }
				placeholder = 'Enter test name'
				onChangeText = {text => this.setState (prevState =>
				{return {tests : prevState.tests,
						name: text}})}
			/>
		</View>

</View>
                                      
                                      
                                     
		);
	}
}
