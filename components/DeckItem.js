import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DeckItem(props) {
  return (
    <View>
      <Text>{props.title}</Text>
      <Text>{props.NoOfQuestions + " Questions"}</Text>
    </View>
  );
}
