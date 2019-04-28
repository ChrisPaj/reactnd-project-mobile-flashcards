import React, { Component } from "react";
import {
  StyleSheet,
  View,
  FlatList,
} from "react-native";
import { connect } from "react-redux";
import DeckItem from "./DeckItem";

class DecksList extends Component {
  _keyExtractor = item => item.title;
  _renderItem = ({ item }) => (
    <View>
      <DeckItem
        title={item.title}
        NoOfQuestions={item.questions ? item.questions.length : 0}
        navigation={this.props.navigation}
        item={item}
      />
    </View>
  );
  render() {
    const { entries } = this.props;
    var data = new Array();
    Object.keys(entries).map(deck => data.push(entries[deck]));
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
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapStateToProps = entries => {
  return {
    entries
  };
};
export default connect(mapStateToProps)(DecksList);
