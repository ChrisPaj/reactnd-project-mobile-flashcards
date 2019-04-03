import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { firstStore } from "../utils/firstStore";
import DeckItem from "./DeckItem";

class DecksList extends Component {
  _keyExtractor = (item) => item.title;
  _renderItem = ({ item }) => (
	<DeckItem
	  title={item.title}
	  questions={item.questions.length}			
	/>
  )
  render() {
    var data = new Array();
    Object.keys(firstStore).map(deck => data.push(firstStore[deck]));
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={this._renderItem}
		  keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default DecksList;
