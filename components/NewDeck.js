import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux"
import { addDeck, changeDeckTitle } from "../actions"

class NewDeck extends React.Component {
  state = {
    deckTitle: ""
  };
  handleAddDeck = () => {
    this.props.addDeck({
      lalalala: {
        title: "Psychology",
        questions: [
          {
            question: "What does ABC mean?",
            answer:
              "ABC"
          },
          {
            question: "Who is the founder of Psychology",
            answer: "Charles Psychology"
          }
        ]
      }
    })
  }
  render() {
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={deckTitle => this.setState({ deckTitle })}
          value={this.state.deckTitle}
        />
        <TouchableOpacity onPress={this.handleAddDeck}>
          <Text>Add Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(entries) {
  return {
    entries
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
   addDeck: (deck) => {
     dispatch(addDeck(deck))
   }
  }
 }

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)
