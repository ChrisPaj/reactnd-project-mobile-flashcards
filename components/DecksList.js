import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { firstStore } from "../utils/firstStore";
import DeckItem from "./DeckItem";
import { receiveData } from "../actions"

class DecksList extends Component {
  componentDidMount(){
    this.props.dispatch(receiveData())

  }
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
	console.log(this.props.entries)
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
  }
});

function mapStateToProps(entries) {
  return {
    entries
  };
}
export default connect(mapStateToProps)(DecksList);
