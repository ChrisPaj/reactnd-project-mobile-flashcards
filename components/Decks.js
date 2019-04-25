import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import DecksList from "./DecksList";
import NewDeck from "./NewDeck";
import { getAsyncStorage, setAsyncStorage } from "../utils/helpers";
import { receiveData } from "../actions";

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
        <View style={styles.header}>
          <Text style={styles.text}>Decks</Text>
        </View>
        <DecksList navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    backgroundColor: "yellow",
    width: "100%",
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    
  }
});

export default connect()(Decks);
