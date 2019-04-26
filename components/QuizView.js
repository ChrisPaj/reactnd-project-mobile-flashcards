import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { lightBeige, kaminRed, orange } from "../utils/colors";

class QuizView extends Component {
  static navigationOptions = {
    title: "Quiz View"
  };
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
      this.setState(prevState => {
        return {
          questionNumber:
            prevState.questionNumber === noOfQuestions - 1
              ? prevState.questionNumber
              : prevState.questionNumber + 1,
          showQuestion: true,
          correctAnswers: resultQuestion
            ? prevState.correctAnswers + 1
            : prevState.correctAnswers,
          clicks: prevState.clicks + 1,
          showResult: prevState.clicks === noOfQuestions - 1 ? true : false
        };
      });
    }
  };
  restart = () => {
    this.setState({
      showQuestion: true,
      showResult: false,
      correctAnswers: 0,
      questionNumber: 0,
      clicks: 0
    });
  };
  render() {
    const { navigation, entries } = this.props;
    const {
      questionNumber,
      showQuestion,
      showResult,
      correctAnswers
    } = this.state;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const deck = entries[deckTitle];
    if (!deck.questions)
      return (
        <View style={[styles.container, {justifyContent: "center"}]}>
          <Text style={styles.scoreText}>Please, add at least one question, before starting a quiz.</Text>
        </View>
      );
    const questions = deck.questions;
    const noOfQuestions = questions.length;
    const question = questions[questionNumber].question;
    const answer = questions[questionNumber].answer;

    const showQuestionOrAnswer = showQuestion ? (
      <View style={styles.width}>
        <Text style={styles.question}>{question ? question : null}</Text>
        <TouchableOpacity onPress={this.toggleQuestionAnswer}>
          <Text style={styles.showQuestionAnswer}>Show Answer</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.width}>
        <Text style={styles.question}>{answer}</Text>
        <TouchableOpacity onPress={this.toggleQuestionAnswer}>
          <Text style={styles.showQuestionAnswer}>Show Question</Text>
        </TouchableOpacity>
      </View>
    );

    const showResults = showResult && (
      <View style={{ alignItems: "center" }}>
        <View style={styles.scoreView}>
          <Text style={styles.scoreText}>
            Your Score: {"\n" + correctAnswers} correct answers out of{" "}
            {noOfQuestions}
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.restart}
          style={styles.touchableOpacity}
        >
          <Text style={styles.textTouchableOpacity}>Start again</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.touchableOpacity}
        >
          <Text style={styles.textTouchableOpacity}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    );
    const showButtons = !showResult && (
      <View>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.handleCorrect(noOfQuestions, "correct")}
        >
          <Text style={styles.textTouchableOpacity}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.handleCorrect(noOfQuestions)}
        >
          <Text style={styles.textTouchableOpacity}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    );
    return (
      <View style={styles.container}>
        <View style={styles.questionNumber}>
          <Text style={styles.questionNumberText}>
            Question {questionNumber + 1} from {noOfQuestions}
          </Text>
        </View>
        {showQuestionOrAnswer}
        {showButtons}
        {showResults}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBeige,
    alignItems: "center"
  },
  questionNumber: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 50,
    marginBottom: 50,
    fontSize: 20,
    color: kaminRed
  },
  questionNumberText: {
    fontSize: 20,
    color: kaminRed
  },
  question: {
    fontSize: 30,
    color: kaminRed,
    textAlign: "center"
  },
  width: {
    width: "80%"
  },
  showQuestionAnswer: {
    fontSize: 20,
    color: kaminRed,
    textAlign: "center",
    marginTop: 30
  },
  touchableOpacity: {
    alignItems: "center",
    borderWidth: 5,
    borderColor: orange,
    height: 50,
    borderRadius: 20,
    backgroundColor: kaminRed,
    textAlign: "center",
    width: 200,
    marginTop: 30
  },
  textTouchableOpacity: {
    color: orange,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 7,
    paddingLeft: 10,
    paddingRight: 10
  },
  scoreText: {
    fontSize: 20,
    color: kaminRed,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    fontWeight: "bold"
  },
  scoreView: {
    borderRadius: 20,
    borderColor: kaminRed,
    backgroundColor: orange,
    borderWidth: 5,
    height: 70,
    marginTop: 30
  }
});

function mapStateToProps(entries) {
  return {
    entries
  };
}
export default connect(mapStateToProps)(QuizView);
