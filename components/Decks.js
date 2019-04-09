import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux"
import DeckList from "./DecksList";
import NewDeck from "./NewDeck";
import { getAsyncStorage, setAsyncStorage } from "../utils/helpers";
import { receiveData } from "../actions"

class Decks extends Component {
  componentDidMount() {
    getAsyncStorage()
      .then(results => {
        return results === null ? setAsyncStorage() : results;
      })
      .then(result => this.props.dispatch(receiveData(result)));
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Decks</Text>
        <DeckList />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect()(Decks);
