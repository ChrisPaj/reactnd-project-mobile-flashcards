const RECEIVE_DATA = "RECEIVE_DATA"
const ADD_QUESTION = "ADD_QUESTION"
const ADD_DECK = "ADD_DECK"
const CHANGE_DECK_TITLE = "CHANGE_DECK_TITLE"

export function receiveData(){
	return {
		type: RECEIVE_DATA,
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