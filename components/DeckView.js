import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class DeckView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Biology</Text>
          <Text>6 Questions</Text>
        </View>
        <View>
          <TouchableOpacity><Text>Add Question</Text></TouchableOpacity>
          <TouchableOpacity><Text>Start Quiz</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default DeckView;
