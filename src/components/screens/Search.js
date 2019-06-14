import React, { Component } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default class Search extends Component {

   SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      data: newData,
      text: text,
    });
  }

  render() {
    return (
      <View style={styles.inputBoxBlock}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          onChangeText={text => this.SearchFilterFunction(text)}
          placeholder="Tapez un mot clé"
          placeholderTextColor="#333"
          selectionColor="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputBoxBlock: {
    paddingHorizontal: 10
  },
  inputBox: {
    width: "100%",
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 0.5,
    borderColor: "#000",
    fontSize: 16,
    color: "#000",
    marginVertical: 10
  }
});
