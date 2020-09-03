import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import Spacer from './Spacer';
import {Context as LocationContext} from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
	const {state: {name, recording, locations}, 
			startRecording, 
			stopRecording, 
			changeName} 
			= useContext(LocationContext);
	const [saveTrack] = useSaveTrack();

	return(
		<View>
			<Spacer>
				<Input
					value={name}
					placeholder="Enter Name" 
					onChangeText={changeName}
				/>
			</Spacer>
			{recording 
				? <Button title="Stop" onPress={stopRecording} />
				: <Button title="Start Recording" onPress={startRecording} />
			}
			<Spacer>
			{
				!recording && locations.length
				? <Button title="Save Recording" onPress={saveTrack} />
				:null
			}
			</Spacer>
		</View>
	);
};

export default TrackForm;