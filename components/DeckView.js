import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteDeck } from "../actions";
import { deleteDeckFromDb } from "../utils/helpers"

class DeckView extends Component {
  shouldComponentUpdate(nextProps){
    const { navigation, entries } = nextProps;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const deckInfo = entries[deckTitle];
    //console.log("entriesscu", deckInfo)
    return typeof(deckInfo) !== "undefined"
  }
  handleDeleteDeck = () => {
    const { navigation, delDeck } = this.props;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    //console.log("deckTitle", deckTitle)
    deleteDeckFromDb(deckTitle)
    delDeck(deckTitle)
    navigation.navigate("Decks")
  }
  render() {
    const { navigation, entries } = this.props;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const deckInfo = entries[deckTitle];
    return (
      <View style={styles.container}>
        <View>
          <Text>{deckInfo.title}</Text>
          <Text>{`${deckInfo.questions.length} Questions`}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("NewQuestion", { deckTitle: deckInfo.title })
            }
          >
            <Text>Add Question</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("QuizView", { deckTitle: deckInfo.title })
            }
          >
            <Text>Start Quiz</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.handleDeleteDeck}>
            <Text>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = entries => {
  return {
    entries
  };
};
const mapDispatchToProps = dispatch => {
  return {
    delDeck: deckTitle => {
      dispatch(deleteDeck(deckTitle));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckView);
