export const RECEIVE_DATA = "RECEIVE_DATA"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_DECK = "ADD_DECK"
export const CHANGE_DECK_TITLE = "CHANGE_DECK_TITLE"
export const DELETE_DECK = "DELETE_DECK"

export function receiveData(data){
	return {
		type: RECEIVE_DATA,
		data
	}
}

export function addQuestion(deck, question, answer){
	return {
		type: ADD_QUESTION,
		deck,
		question,
		answer
	}
}

export function addDeck(deck){
	return {
		type: ADD_DECK,
		deck
	}
}

export function deleteDeck(id){
	return {
		type: DELETE_DECK,
		id
	}
}

export function changeDeckTitle(title){
	return {
		type: CHANGE_DECK_TITLE,
		title
	}
}