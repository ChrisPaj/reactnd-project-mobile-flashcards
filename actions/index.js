const RECEIVE_DATA = "RECEIVE_DATA"
const ADD_QUESTION = "ADD_QUESTION"
const ADD_DECK = "ADD_DECK"

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