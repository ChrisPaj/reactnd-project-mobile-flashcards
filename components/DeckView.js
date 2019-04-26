import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteDeck } from "../actions";
import { deleteDeckFromDb } from "../utils/helpers";
import { lightBeige, kaminRed, orange } from "../utils/colors";

class DeckView extends Component {
  static navigationOptions = {
    title: "Deck View"
  };
  shouldComponentUpdate(nextProps) {
    const { navigation, entries } = nextProps;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const deckInfo = entries[deckTitle];
    //console.log("entriesscu", deckInfo)
    return typeof deckInfo !== "undefined";
  }
  handleDeleteDeck = () => {
    const { navigation, delDeck } = this.props;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    //console.log("deckTitle", deckTitle)
    deleteDeckFromDb(deckTitle);
    delDeck(deckTitle);
    navigation.navigate("Decks");
  };
  render() {
    const { navigation, entries } = this.props;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const deckInfo = entries[deckTitle];
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deck}>{deckInfo.title}</Text>
          <Text style={styles.questions}>
            {deckInfo.questions ? 
              `${deckInfo.questions.length} Questions`: `0 Questions`}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            style={styles.tochableOpacity}
            onPress={() =>
              navigation.navigate("NewQuestion", { deckTitle: deckInfo.title })
            }
          >
            <Text style={styles.textTouchableOpacity}>Add Question</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tochableOpacity}
            onPress={() =>
              navigation.navigate("QuizView", { deckTitle: deckInfo.title })
            }
          >
            <Text style={styles.textTouchableOpacity}>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tochableOpacity}
            onPress={this.handleDeleteDeck}
          >
            <Text style={styles.textTouchableOpacity}>Delete Deck</Text>
          </TouchableOpacity>
        </View>
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
  innerContainer: {
    flex: 1,
    alignItems: "center"
  },
  deck: {
    fontSize: 30,
    marginBottom: 10,
    marginTop: 80,
    color: kaminRed
  },
  questions: {
    fontSize: 20,
    color: kaminRed,
    textAlign: "center"
  },
  tochableOpacity: {
    alignItems: "center",
    borderWidth: 5,
    borderColor: orange,
    height: 50,
    borderRadius: 20,
    backgroundColor: kaminRed,
    textAlign: "center",
    width: 200,
    marginTop: 50
  },
  textTouchableOpacity: {
    color: orange,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10
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
