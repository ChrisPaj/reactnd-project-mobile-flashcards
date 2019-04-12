import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class QuizView extends Component {
  state = {
    showQuestion: true,
    showResult: false,
    correctAnswers: 0,
    questionNumber: 0,
    clicks: 0
  };
  toggleQuestionAnswer = () => {
    this.setState(prevState => ({ showQuestion: !prevState.showQuestion }));
  };
  handleCorrect = (noOfQuestions, resultQuestion) => {
    if (this.state.clicks <= noOfQuestions - 1) {
      this.setState((prevState) => {
        return {
        questionNumber: prevState.questionNumber === noOfQuestions - 1 ? prevState.questionNumber : prevState.questionNumber + 1,
        showQuestion: true,
        correctAnswers: resultQuestion ? prevState.correctAnswers + 1 : prevState.correctAnswers,
        clicks: prevState.clicks + 1,
        showResult: prevState.clicks === noOfQuestions - 1 ? true : false
        }
      });
    } 
  };
  render() {
    const { navigation, entries } = this.props;
    const { questionNumber, showQuestion, showResult, correctAnswers } = this.state;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const deck = entries[deckTitle];
    const questions = deck.questions;
    const noOfQuestions = questions.length;
    const question = questions[questionNumber].question;
    const answer = questions[questionNumber].answer;

    const showQuestionOrAnswer = showQuestion ? (
      <View>
        <Text>{question ? question : null}</Text>
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

    const results = showResult && (
      //const results = 
      <View>
        <Text>
          Score: {correctAnswers} correct answers out of {noOfQuestions}
        </Text>
      </View>
    );
    return (
      <View style={styles.container}>
        <View>
          <Text>
            Question {questionNumber + 1} from {noOfQuestions}
          </Text>
          {showQuestionOrAnswer}
        </View>
        <View>
          <TouchableOpacity onPress={() => this.handleCorrect(noOfQuestions, "correct")}>
            <Text>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.handleCorrect(noOfQuestions)}>
            <Text>Incorrect</Text>
          </TouchableOpacity>
        </View>
        {results}
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
