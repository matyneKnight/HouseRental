import React, { Component } from "react";
import { Button, Footer, FooterTab } from "native-base";
import { Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Actions } from "react-native-router-flux";


export default class FooterBar extends Component {
  accountScreen() {
    Actions.accountScreen();
  }
  notificationScreen() {
    Actions.notificationScreen();
  }
  contactScreen() {
    Actions.contactScreen();
  }
  landingScreen() {
    Actions.landingScreen();
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active  onPress={this.landingScreen}>
            <Text>Acceuil</Text>
            <Ionicons name="md-home" size={22} color="#32B76C" />
          </Button>

          <Button onPress={this.notificationScreen}>
            <Text>Notifications</Text>
            <Ionicons name="md-notifications" size={22} color="#32B76C" />
          </Button>

          <Button onPress={this.accountScreen}>
            <Text>Mon compte</Text>
            <Ionicons name="md-person" size={22} color="#32B76C" />
          </Button>

          <Button onPress={this.contactScreen}>
            <Text>Contact</Text>
            <Ionicons name="md-contacts" size={22} color="#32B76C" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
