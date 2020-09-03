import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({navigation}) => {
	const {state, signin, clearErrorMessage} = useContext(AuthContext);

	console.log(state);

	return(
		<View style={styles.container}>
			<NavigationEvents
				onWillBlur={clearErrorMessage}
			/>
			<AuthForm 
				headerText = "Signin for Tracker"
				errorMessage = {state.errorMessage}
				submitButtonText = "Sign In"
				onSubmit = {signin}
			/>
			<NavLink 
				routeName="Signup"
				text="Don't have an account? Create an Account"
			/>
		</View>
	);
};

SignupScreen.navigationOptions = () => {
	return{
		header: null
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 200,
	},

});

export default SignupScreen;