import { AsyncStorage } from "react-native"
import { firstStore } from "./firstStore"

const keyAsyncStorage = "test"

export const setAsyncStorage = () => {
AsyncStorage.setItem(keyAsyncStorage, firstStore)
}

export const getAsyncStorage = () => {
	AsyncStorage.getItem(keyAsyncStorage)
	.then(result => result)
	}