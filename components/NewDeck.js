import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

export default class NewDeck extends React.Component {
  state = {
    title: ""
  };
  render() {
    console.log(this.state.title);
    return (
      <View>
        <Text>What is the title of your new deck?</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
