import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";

export default class AVDBannerSecond extends Component {
  render() {
    return (
      <Image
        source={require("../../assets/images/RentingBanner1.jpeg")}
        style={styles.banner2}
      />
    );
  }
}

const styles = StyleSheet.create({
  banner2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    marginVertical: 20
  }
});
