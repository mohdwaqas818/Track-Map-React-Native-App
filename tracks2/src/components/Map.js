import React, {useContext} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import {Context as LocationContext} from '../context/LocationContext';

const Map = () => {
	const {state: {currentLocation, locations}} = useContext(LocationContext);
	console.log(locations);

	if(!currentLocation){
		return(
			<ActivityIndicator 
				size="large"
				style={{marginTop: 200}}
			/>
		);
	}
	
	return(
		<View>
			<Text>I am a map</Text>
			<MapView 
				style={styles.mapStyle}
				initialRegion={{
					...currentLocation.coords,
					latitudeDelta: 0.01,
					longitudeDelta:0.01
				}}
			>
			<Circle 
				center={currentLocation.coords}
				radius={30}
				strokeColor="rgba(158, 158, 255, 1.0)"
				fillColor="rgba(158, 158, 255, 0.3)"
			/>
			<Polyline
				coordinates={locations.map(loc => loc.coords)}
			/>
			</MapView>
		</View>
	);
};

const styles = StyleSheet.create({
	mapStyle:{
		height: 300,
	},
});

export default Map;