import React from 'react';

import { Text, View } from "react-native";

const HolaMundo = () => {
	return (
		<View style={{
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		}}>
			<Text style={{
				fontSize: 45

			}}>Hola mundo</Text>
		</View>
	)

}

export default HolaMundo;