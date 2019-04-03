import React, { Component } from "react"
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./DecksList"

class Decks extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>Decks</Text>
				<DeckList />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
  });

  export default Decks
  