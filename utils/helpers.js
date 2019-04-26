import { AsyncStorage } from "react-native";
import { firstStore } from "./firstStore";
import { Permissions, Notifications } from "expo";

const keyAsyncStorage = "mobile:flashcards";
const NOTIFICATION_KEY = "localNotifications";

export const setAsyncStorage = () => {
  AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(firstStore));
  return firstStore;
};

export const delAsyncStorage = () => {
  AsyncStorage.removeItem(keyAsyncStorage);
};
export const delAsyncStorageNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY);
};

export const getAsyncStorage = () => {
  return AsyncStorage.getItem(keyAsyncStorage)
    .then(result => JSON.parse(result))
    .catch(error => console.log(error));
};

export const getAsyncStorageNotification = () => {
  return AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(result => JSON.parse(result))
    .catch(error => console.log(error));
};

export const saveDeckTitleToDb = deck => {
  getAsyncStorage()
    .then(result => Object.assign(result, deck))
    .then(result =>
      AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(result))
    )
    .catch(error => console.log(error));
};

export const saveQuestionToDb = (deckTitle, question) => {
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

export const deleteDeckFromDb = deckTitle => {
  getAsyncStorage()
    .then(result => {
      const newAsyncStorage = {};
      const decks = Object.keys(result).filter(key => key !== deckTitle);
      decks.map(deck => (newAsyncStorage[deck] = result[deck]));
      return newAsyncStorage;
    })
    .then(result =>
      AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(result))
    )
    .catch(error => console.log(error));
};

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
  return {
    title: "Learning Reminder",
    body: "👋 don't forget to prctice with your flashcards today",
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true
    }
  };
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(21)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}
