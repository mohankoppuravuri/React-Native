import React 				from 'react';
import { Avatar,
	Card,
	Icon
} 			from 'react-native-elements';

import { 
	View,					
	Text,						
	Button,					
} 							from 'react-native';


export default class CardView extends React.Component {
	
	render(){
		return(
			<View>
				<Card>
					<Text>
						latitude:{ this.props.latitude} 	
					</Text>
					<Text>
						longitude: { this.props.longitude }
					</Text>
					<View>
						<Button
							icon={<Icon name='code' color='#ffffff' />}
							buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
							title='Show in maps' 
							 />
					</View>
				</Card>
			</View>
			);
}


}
