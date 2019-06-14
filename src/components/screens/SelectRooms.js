import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SelectRoomsHeader from "./SelectRoomHeader";
import VListRoom from "./VListRoom";
import Search from "./Search";
import { Actions } from "react-native-router-flux";
import FooterBar from "./FooterBar";

export default class SelectRooms extends Component {
  deshboard() {
    Actions.deshboard();
  }
  render() {
    return (
      <View style={styles.container}>
        <SelectRoomsHeader />
        <VListRoom />
        <FooterBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1
  },
  mapView: {
    height: 500
  }
});
