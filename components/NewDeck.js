import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeckTitleToDb } from "../utils/helpers";
import { lightBeige, kaminRed, orange } from "../utils/colors";

class NewDeck extends React.Component {
  static navigationOptions = {
    title: "New Deck",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: orange,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  state = {
    deckTitle: ""
  };
  handleAddDeck = () => {
    const { addDeck, navigation } = this.props;
    const { deckTitle } = this.state;
    const deck = {
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    };
    saveDeckTitleToDb(deck);
    addDeck(deck);
    this.setState({ deckTitle: "" });
    navigation.navigate("Decks");
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.deckTitle}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={deckTitle => this.setState({ deckTitle })}
          value={this.state.deckTitle}
        />
        <TouchableOpacity
          onPress={this.handleAddDeck}
          style={[this.state.deckTitle === "" && { display: "none" }, styles.tochableOpacity]}
        >
          <Text style={styles.textTouchableOpacity}>Add Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(entries) {
  return {
    entries
  };
}
const mapDispatchToProps = dispatch => {
  return {
    addDeck: deck => {
      dispatch(addDeck(deck));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: lightBeige
  },
  deckTitle: {
    fontSize: 20,
    marginTop: 100,
    marginBottom: 80,
    color: kaminRed,
    fontWeight: "bold"
  },
  textInput: {
    borderWidth: 2,
    borderColor: kaminRed,
    width: "80%",
    height: 50,
    borderRadius: 20, 
    backgroundColor: orange,
    textAlign: "center",
    color: kaminRed,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 80,
  },
  tochableOpacity: {
    alignItems: "center",
    borderWidth: 5,
    borderColor: orange,
    width: "50%",
    height: 50,
    borderRadius: 20, 
    backgroundColor: kaminRed,
    textAlign: "center",
  },
  textTouchableOpacity: {
    color: orange,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 7
  }
});
