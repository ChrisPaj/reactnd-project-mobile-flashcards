import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Decks from "./components/Decks";
import {
  setAsyncStorage,
  getAsyncStorage,
  delAsyncStorage
} from "./utils/helpers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import DeckView from "./components/DeckView";
import QuizView from "./components/QuizView";
import NewDeck from "./components/NewDeck";
import NewQuestion from "./components/NewQuestion";

export default class App extends React.Component {
  componentDidMount() {
    setAsyncStorage();
    //delAsyncStorage();
  }

  showAsyncStorage() {
    getAsyncStorage().then(data => console.log(data));
  }
  render() {
    return (
      <Provider store={createStore(reducer)}> 
        <View style={styles.container}>
          <Decks />
          <TouchableOpacity>
            <Text onPress={this.showAsyncStorage}>
              Click to show AsyncStorage
            </Text>
          </TouchableOpacity>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});
