import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

class NewQuestion extends React.Component {
  state = {
    question: "",
    answer: ""
  };
  render() {
    const { navigation } = this.props;
    const deckTitle = navigation.getParam('deckTitle', 'NO-ID');
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder={"enter your question here"}
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder={"enter your answer here"}
        />
        <TouchableOpacity
        onPress={this.handleAddDeck}
        style={(this.state.question === "" || this.state.answer === "") && { display: "none" }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NewQuestion