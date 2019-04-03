import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default class NewDeck extends React.Component {
  state = {
	question: "",
	answer: ""
  };
  render() {
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
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
