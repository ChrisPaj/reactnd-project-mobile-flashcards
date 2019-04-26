import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addQuestion } from "../actions";
import { saveQuestionToDb } from "../utils/helpers";
import { lightBeige, kaminRed, orange } from "../utils/colors";

class NewQuestion extends React.Component {
  static navigationOptions = {
    title: 'Add New Question',
  }
  state = {
    question: "",
    answer: ""
  };
  handleAddQuestion = () => {
    const { navigation } = this.props;
    const deckTitle = navigation.getParam("deckTitle", "NO-ID");
    const { question, answer } = this.state;
    const { addQuestion } = this.props;

    addQuestion(deckTitle, question, answer);
    this.setState({
      question: "",
      answer: ""
    });
    saveQuestionToDb(deckTitle, {question: question, answer: answer});
    navigation.navigate("DeckView", {deckTitle: deckTitle})
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={question => this.setState({ question })}
          value={this.state.question}
          placeholder={"enter your question here"}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={answer => this.setState({ answer })}
          value={this.state.answer}
          placeholder={"enter your answer here"}
        />
        <TouchableOpacity
          onPress={this.handleAddQuestion}
          style={
           [(this.state.question === "" || this.state.answer === "") && {
              display: "none"
            }, styles.tochableOpacity]
          }
        >
          <Text style={styles.textTouchableOpacity}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addQuestion: (deck, question, answer) => {
      dispatch(addQuestion(deck, question, answer));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(NewQuestion);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: lightBeige
  },
  textInput: {
    borderWidth: 2,
    borderColor: kaminRed,
    width: "80%",
    height: 50,
    borderRadius: 20, 
    backgroundColor: orange,
    textAlign: "center",
    color: kaminRed,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 80,
  },
  tochableOpacity: {
    alignItems: "center",
    borderWidth: 5,
    borderColor: orange,
    width: "50%",
    height: 50,
    borderRadius: 20, 
    backgroundColor: kaminRed,
    textAlign: "center",
    marginTop: 80,
  },
  textTouchableOpacity: {
    color: orange,
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 7
  }
});
