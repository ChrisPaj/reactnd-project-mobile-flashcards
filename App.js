import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from "./components/Decks"
import DeckView from "./components/DeckView"

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Decks />
        <DeckView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
