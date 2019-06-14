import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import Logo from "../../../../src/Logo";
import FormForgot from "../auth-from/FormForgot";
import { Actions } from "react-native-router-flux";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class Forgot extends Component {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goBack}>
          <Text style={{ marginTop: 60, marginLeft: 10 }}>Retour</Text>
        </TouchableOpacity>
        <Logo />
        <FormForgot type="Envoyer" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>
            Un mail de rénitialisation vous sera envoyé.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20d2bb",
    flex: 1
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 16
  },
  signupButton: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500"
  }
});
