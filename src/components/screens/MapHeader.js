import React, { Component } from "react";
import { Header, Left, Body, Right, Button, Title } from "native-base";

import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";
export default class MapHeader extends Component {
  goBack() {
    Actions.pop();
  }
  clusterMap() {
    Actions.clusterMap();
  }
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.goBack}>
            <Ionicons
              name="ios-arrow-back"
              size={22}
              color="#32B76C"
              onPress={this.goBack}
            />
          </Button>
        </Left>
        <Body>
          <Title style={styles.titleMain}>Carte</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon
              name="map-marker"
              size={22}
              color="#32B76C"
            />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({});
