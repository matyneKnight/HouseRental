import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import Logo from "../../../../src/Logo";
import FormSignUp from "../auth-from/FormSignUp";
import { Actions } from "react-native-router-flux";

export default class SignUp extends Component {
  goBack() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <FormSignUp type="S'inscrire" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Vous posséder déja un compte?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupButton}>Se connecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#20d2bb",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#000",
    fontSize: 16,
    fontWeight: "500"
  }
});
