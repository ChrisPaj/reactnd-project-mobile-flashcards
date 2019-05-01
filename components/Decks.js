import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import DecksList from "./DecksList";
import { getAsyncStorage, setAsyncStorage, setLocalNotification } from "../utils/helpers";
import { lightBeige, kaminRed, orange } from "../utils/colors";
import { receiveData } from "../actions";

class Decks extends Component {
  static navigationOptions = {
    title: "Mobile Flashcards",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: orange,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    }, 
  };
  componentDidMount() {
    getAsyncStorage()
      .then(results => {
        return results === null ? setAsyncStorage() : results;
      })
      .then(result => this.props.dispatch(receiveData(result)));
      setLocalNotification()
      this.setState({test: 1})
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
    flex: 1,
    backgroundColor: lightBeige,
    alignItems: "center"
  },
  header: {
    marginBottom: 30,
    width: "100%",
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: "center",
    fontSize: 40,
    color: kaminRed
    
  }
});

export default connect()(Decks);
