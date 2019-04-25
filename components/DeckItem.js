import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
  },
  deck: {
    fontSize: 30,
    marginBottom: 10,

  },
  questions: {
    fontSize: 20,
  }
});
