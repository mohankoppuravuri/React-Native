import React   				 from 'react'
import {
	Picker,
	View,
	TextInput,
	Text,
	Button,
}							from 'react-native'; 
import AntDesign  			from 'react-native-vector-icons/AntDesign'
export default class Farm extends React.Component {
	constructor (){
		super ()
		this.state = {
			language : '',
			samples : [],
			flock: '',
			age:  ''
		}
	}
	static navigationOptions ={
	title: 'Farm Info'
	}
	 
		render(){
		const option = ['Farm Name','Allen Harim', 'Amick Farms']
		const days =   ['1', '2', '3', '4', '5', '6']
		return(
			<View >
				<Picker
					selectedValue			=	{this.state.language}	
					itemTextStyle			=	{{fontSize: 15}}
					activeItemTextStyle		=	{{fontSize: 18, fontWeight: 'bold'}}
					onValueChange			=	{(itemValue, itemIndex) =>
											 this.setState({language: itemValue})}
					>
				
					{ option.map(i => 
					(<Picker.Item label = {i} value= {i}/>)
					)}
				 
				</Picker>
				<View >
					{this.state.samples.map(i => 
					(<View style = {{flexDirection:'row', justifyContent: 'space-between'}}>
						<Text style  > {i}</Text>
						<AntDesign name = 'delete' size ={24}
							   	   onPress = {()=>{
										this.setState((prevState)=>{
															return {
																	language: prevState.samples,
																	samples: prevState.samples.filter(data=>{
																											if (data !== i)
																											return data
																										}),
																	flock: prevState.flock,
																	age: prevState.age
																	}
																})	
									}}/>
					</View>)
					)}

					<View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>

						<TextInput 	 ref =       {input => { this.textInput = input } }
							placeholder = 'Enter Flock and Farm Name'
							onChangeText = {text => this.setState (prevState =>
							{return {language: prevState.language,
							samples : prevState.samples,
							flock: text,
							age: prevState.age};
							})}
						/> 
						<AntDesign name = "plus" size = {30}
							onPress = {()=> 
							{			this.textInput.clear()
							this.setState(prevState =>
							{return {language: prevState.language,
							samples: prevState.samples.concat(this.state.flock),
							flock: '',
							age: prevState.age
							};
							})}
							}
						/>

				</View>
	</View>
			<View style = {{flexDirection: 'row' }}>
				<Text style = {{width: 50, height: 50}}> Age </Text>
				<TextInput 	placeholder = 'Age'	/> 
			</View>

			<View style = {{flexDirection: 'row'}}>
				<Text> Days </Text> 
			</View>
			
			<Picker	
				selectedValue = {this.state.age}
				itemTextStyle={{fontSize: 15}}
				activeItemTextStyle={{fontSize: 18, fontWeight: 'bold'}}

				onValueChange={(itemValue, itemIndex) =>
				this.setState (prevState =>{
								return {language: prevState.language,
								samples : prevState.samples,
								flock: prevState.flock,
								age: itemValue};
								}
							  )}
			>
			{days.map(i => (<Picker.Item label = {i} value= {i}/>)  )}	 
			</Picker>

			<View style = {{flexDirection: 'row'}}>		
				<TextInput 	placeholder = 'Enter Notes'	/> 
			</View>

			<View style = {{flexDirection: 'row'}}>
				<Button title='Submit' 
						onPress = {()=> {this.props.navigation.navigate('Test')}}/>
			</View>

		</View>
		);
	}
}
