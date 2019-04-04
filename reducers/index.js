import { RECEIVE_DATA, ADD_QUESTION, ADD_DECK } from "../actions";
import { getAsyncStorage } from "../utils/helpers";
var defaultStore = {}
getAsyncStorage().then(data => defaultStore = data)

export default function flashcardReducers(state = defaultStore, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state
      };
    case ADD_QUESTION:
      return {
        ...state
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    default:
      return state;
  }
}
