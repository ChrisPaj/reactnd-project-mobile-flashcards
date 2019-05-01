import React, { Component } from "react";
import { StyleSheet, Text, Animated, TouchableOpacity } from "react-native";
import { kaminRed, orange } from "../utils/colors";

class DeckItem extends Component {
  state = {
    springValue: new Animated.Value(1)
  };
  animationFunction(navigation, title) {
    const { springValue } = this.state;
    Animated.sequence([
			Animated.timing(springValue, { duration: 1, toValue: 1.05}),
			Animated.spring(springValue, { toValue: 1, friction: 12})
		  ]).start(() => navigation.navigate("DeckView", {deckTitle: title}))
  }
  render() {
    const { title, NoOfQuestions, navigation } = this.props;
    const { springValue } = this.state;
    return (
      <TouchableOpacity onPress={() => {
        this.animationFunction(navigation, title)
        }}>
        <Animated.View
          style={[styles.container, { transform: [{ scale: springValue }] }]}
        >
          <Text style={styles.deck}>{title}</Text>
          <Text style={styles.questions}>{NoOfQuestions + " Questions"}</Text>
        </Animated.View>
      </TouchableOpacity>
    );
  }
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
    backgroundColor: kaminRed
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

export default DeckItem;
