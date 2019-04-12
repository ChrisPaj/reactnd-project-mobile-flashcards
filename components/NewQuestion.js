import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addQuestion } from "../actions";
import { saveQuestion } from "../utils/helpers";

class NewQuestion extends React.Component {
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
    saveQuestion(deckTitle, {question: question, answer: answer});
    navigation.navigate("DeckView", {deckTitle: deckTitle})
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
        <TouchableOpacity
          onPress={this.handleAddQuestion}
          style={
            (this.state.question === "" || this.state.answer === "") && {
              display: "none"
            }
          }
        >
          <Text>Submit</Text>
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
