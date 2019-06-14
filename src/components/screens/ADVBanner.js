import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class ADVBanner extends Component {
  render() {
    return (
      <Image
        source={require("../../assets/images/RentingBanner.jpg")}
        style={styles.banner}
      />
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginVertical: 20
  }
});
