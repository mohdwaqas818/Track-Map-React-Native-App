import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation, text, routeName}) => {
	return(
		<TouchableOpacity 
			onPress={() => navigation.navigate(routeName)}
			>
			<Text style={styles.signinStyle}>
				{text}
			</Text>

		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	signinStyle:{
		color: 'blue',
		marginLeft: 15,
		fontWeight: 'bold',
	},
});

export default withNavigation(NavLink);