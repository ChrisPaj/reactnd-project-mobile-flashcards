import { AsyncStorage } from "react-native"
import { firstStore } from "./firstStore"

const keyAsyncStorage = "test"

export const setAsyncStorage = () => {
return AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(firstStore))
}

export const delAsyncStorage = () => {
	AsyncStorage.removeItem(keyAsyncStorage)
	}
	

export const getAsyncStorage = () => {
	return AsyncStorage.getItem(keyAsyncStorage)
	.then(result => JSON.parse(result))
	}

	export const initStore = () => {
		return firstStore
	}