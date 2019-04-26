import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { kaminRed, orange } from "../utils/colors";

export default function DeckItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.deck}>{props.title}</Text>
      <Text style={styles.questions}>{props.NoOfQuestions + " Questions"}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 22,
    paddingBottom: 22,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: orange,
    backgroundColor: kaminRed,
  },
  deck: {
    fontSize: 30,
    marginBottom: 10, 
    color: orange

  },
  questions: {
    fontSize: 20,
    color: orange
  }
});
