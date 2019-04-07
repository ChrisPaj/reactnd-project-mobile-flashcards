import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class QuizView extends Component {
  state = {
    showQuestion: true
  };
  toggleQuestionAnswer = () => {
    this.setState(prevState => ({ showQuestion: !prevState.showQuestion }));
  };
  render() {
    const showQuestionOrAnswer = this.state.showQuestion ? (
      <View>
        <Text>This is a Question</Text>
        <TouchableOpacity onPress={this.toggleQuestionAnswer}>
          <Text>Show Answer</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View>
        <Text>This is an Answer</Text>
        <TouchableOpacity onPress={this.toggleQuestionAnswer}>
          <Text>Show Question</Text>
        </TouchableOpacity>
      </View>
    );
    return (
      <View style={styles.container}>
        <View>
          <Text>2 from 2</Text>
          {showQuestionOrAnswer}
        </View>
        <View>
          <TouchableOpacity>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Incorrect</Text>
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

export default QuizView;
