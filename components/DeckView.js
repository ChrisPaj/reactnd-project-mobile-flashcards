import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class DeckView extends Component {
  render() {
    const { navigation } = this.props;
    const deckInfo = navigation.getParam('deckInfo', 'NO-ID');
    return (
      <View style={styles.container}>
        <View>
          <Text>{deckInfo.title}</Text>
          <Text>{`${deckInfo.questions.length} Questions`}</Text>
        </View>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate("NewQuestion", { deckTitle: deckInfo.title})}>
            <Text>Add Question</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("QuizView", { deckTitle: deckInfo.title})}>
            <Text>Start Quiz</Text>
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

export default DeckView;
