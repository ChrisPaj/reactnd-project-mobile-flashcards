import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Decks from "./components/Decks"
import DeckView from "./components/DeckView"
import QuizView from "./components/QuizView"
import NewDeck from "./components/NewDeck"

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <NewDeck />
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
