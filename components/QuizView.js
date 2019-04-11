import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class QuizView extends Component {
  state = {
    showQuestion: true,
    questionNumber: 1
  };
  toggleQuestionAnswer = () => {
    this.setState(prevState => ({ showQuestion: !prevState.showQuestion }));
  };
  handleAnswer = (noOfQuestions) => {
    if(this.state.questionNumber <= noOfQuestions - 1)
    this.setState({questionNumber: this.state.questionNumber + 1})
  }
  render() {
    const { navigation, entries } = this.props
    const { questionNumber, showQuestion } = this.state
    const deckTitle = navigation.getParam('deckTitle', 'NO-ID')
    const deck = entries[deckTitle]
    const questions = deck.questions
    const noOfQuestions = questions.length
    const question = questions[questionNumber - 1].question
    const answer = questions[questionNumber - 1].answer

    const showQuestionOrAnswer = showQuestion ? (
      <View>
        <Text>{question}</Text>
        <TouchableOpacity onPress={this.toggleQuestionAnswer}>
          <Text>Show Answer</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View>
        <Text>{answer}</Text>
        <TouchableOpacity onPress={this.toggleQuestionAnswer}>
          <Text>Show Question</Text>
        </TouchableOpacity>
      </View>
    );
    return (
      <View style={styles.container}>
        <View>
          <Text>Question {questionNumber} from {noOfQuestions}</Text>
          {showQuestionOrAnswer}
        </View>
        <View>
        <TouchableOpacity onPress={() => this.handleAnswer(noOfQuestions)}>
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

function mapStateToProps(entries) {
  return {
    entries
  };
}
export default connect(mapStateToProps)(QuizView);
