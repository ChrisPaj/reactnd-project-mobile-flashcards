import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions";
import { saveDeckTitle } from "../utils/helpers";

class NewDeck extends React.Component {
  state = {
    deckTitle: ""
  };
  handleAddDeck = () => {
    const { addDeck } = this.props;
    const { deckTitle } = this.state;
    const deck = {
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
    };
    saveDeckTitle(deck);
    addDeck(deck);
  };
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={deckTitle => this.setState({ deckTitle })}
          value={this.state.deckTitle}
        />
        <TouchableOpacity 
        onPress={this.handleAddDeck}
        style={this.state.deckTitle === "" && { display: "none" }}>
          <Text>Add Deck</Text>
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
