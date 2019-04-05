import { RECEIVE_DATA, ADD_QUESTION, ADD_DECK, CHANGE_DECK_TITLE } from "../actions";
import { getAsyncStorage } from "../utils/helpers";
var defaultStore = {};
getAsyncStorage().then(data => (defaultStore = data));

export default function flashcardReducers(state = defaultStore, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: {
            ...state[action.deck].questions,
            ...action.question
          }
        }
	  };
	  case CHANGE_DECK_TITLE:
      return {
        ...state,
        React: action.title
      };
    case ADD_DECK:
	  return  {
		  ...state,
		  ...action.deck
	}
    default:
      return state;
  }
}
