import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import MapHeader from "./MapHeader";
import Search from "./Search";
import MapViewCustom from "./MapViewCustom";
export default class ClusterMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapHeader />
        <View style={styles.mapViewCont}>
          <MapViewCustom />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  mapViewCont: {
    height: 600,
    backgroundColor: "#fff"
  }
});
