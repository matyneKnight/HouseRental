import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
export default class MapViewCustom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 12.9911944,
            longitude: 77.7055357,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={true}s
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 10,
    right: 10,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#32B76C"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#000",
    margin: 8,
    marginBottom: 50,
  }
});
