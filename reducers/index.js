import {
  RECEIVE_DATA,
  ADD_QUESTION,
  ADD_DECK,
  CHANGE_DECK_TITLE
} from "../actions";

export default function flashcardReducers(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        ...action.data
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
      return Object.assign({}, state, action.deck);
    default:
      return state;
  }
}
