import { AsyncStorage } from "react-native";
import { firstStore } from "./firstStore";

const keyAsyncStorage = "mobile:flashcards";

export const setAsyncStorage = () => {
  AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(firstStore));
  return firstStore;
};

export const delAsyncStorage = () => {
  AsyncStorage.removeItem(keyAsyncStorage);
};

export const getAsyncStorage = () => {
  return AsyncStorage.getItem(keyAsyncStorage)
    .then(result => JSON.parse(result))
    .catch(error => console.log(error));
};

export const saveDeckTitle = deck => {
  getAsyncStorage()
    .then(result => Object.assign(result, deck))
    .then(result =>
      AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(result))
    )
    .catch(error => console.log(error));
};

export const saveQuestion = (deckTitle, question) => {
  getAsyncStorage()
    .then(result => {
      return {
        ...result,
        [deckTitle]: {
          ...result[deckTitle],
          questions: [...result[deckTitle].questions.concat(question)]
        }
      };
    })
    .then(result => {
      console.log("AsyncStorage", result);
      return AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(result));
    })
    .catch(error => console.log(error));
};
