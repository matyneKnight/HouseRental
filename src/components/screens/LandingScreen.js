import React, { Component } from "react";
import { Container } from "native-base";
import { StyleSheet } from "react-native";
import HeaderBar from "./HeaderBar";
import BodyLanding from "./BodyLanding";
import FooterBar from "./FooterBar";

export default class LandingScreen extends Component {
  render() {
    return (
      <Container style={styles.containerBg}>
        <HeaderBar />
        <BodyLanding />
        <FooterBar />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  containerBg: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 10
  }
});
