import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
	setAsyncStorage,
	getAsyncStorage,
	delAsyncStorage
  } from "../utils/helpers";

export default class Options extends React.Component {

	showAsyncStorage() {
	  getAsyncStorage().then(data => console.log(data));
	}
	deleteAsyncStorage() {
	  delAsyncStorage()
	}
	setupAsyncStorage() {
	  setAsyncStorage()
	}
  
	render() {
	  return (	
		  <View style={styles.container}>
			<TouchableOpacity>
			  <Text onPress={this.showAsyncStorage}>
				Click to show AsyncStorage in console
			  </Text>
			</TouchableOpacity>
			<TouchableOpacity>
			  <Text onPress={this.deleteAsyncStorage}>
				Delete AsyncStorage
			  </Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={this.setupAsyncStorage}>
			<Text>
				Set AsyncStorage
			</Text>
			</TouchableOpacity>
		  </View>
	  );
	}
  }
  
  const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  marginTop: 50
	}
  });