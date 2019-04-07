export const RECEIVE_DATA = "RECEIVE_DATA"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_DECK = "ADD_DECK"
export const CHANGE_DECK_TITLE = "CHANGE_DECK_TITLE"

export function receiveData(data){
	return {
		type: RECEIVE_DATA,
		data
	}
}

export function addQuestion(question){
	return {
		type: ADD_QUESTION,
		question
	}
}

export function addDeck(deck){
	return {
		type: ADD_DECK,
		deck
	}
}

export function changeDeckTitle(title){
	return {
		type: CHANGE_DECK_TITLE,
		title
	}
}