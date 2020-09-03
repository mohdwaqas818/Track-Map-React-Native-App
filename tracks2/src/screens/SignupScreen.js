import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import NavLink from '../components/NavLink';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation}) => {
	const {state, signup, clearErrorMessage} = useContext(AuthContext);
	
	return(
		<View style={styles.container}>
			<NavigationEvents
				onWillBlur={clearErrorMessage}
			/>
			<AuthForm 
				headerText = "Signup for Tracker"
				errorMessage = {state.errorMessage}
				submitButtonText = "Sign Up"
				onSubmit = {signup}
			/>
			<NavLink 
				routeName="Signin"
				text="Already have an account? SignIn instead!"
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