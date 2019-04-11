import React from "react";
import { StyleSheet, View, Platform, StatusBar, Text, Button } from "react-native";
import Decks from "./components/Decks";
import DecksList from "./components/DecksList";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import logger from "./middleware/logger"
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import { purple, white, orange } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Options from "./components/Options";
import DeckView from "./components/DeckView";
import QuizView from "./components/QuizView";
import NewQuestion from "./components/NewQuestion";
import NewDeck from "./components/NewDeck";
import { Constants } from "expo"

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="list" size={30} color={tintColor} />
        )
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: "New Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus" size={30} color={tintColor} />
        )
      }
    },
    Options: {
      screen: Options,
      navigationOptions: {
        tabBarLabel: "Options",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="wrench" size={30} color={tintColor} />
        )
      }
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  DecksList: {
    screen: DecksList,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  Decks: {
    screen: Decks,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    }),
  },
}));

export default class App extends React.Component {  
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(logger))}> 
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content"/>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  }
});