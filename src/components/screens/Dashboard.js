import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon
} from "native-base";
import BodyLanding from "./BodyLanding";

export default class Dashboard extends Component {
  landingScreen() {
    Actions.landingScreen();
  }
  render() {
    const clusterFor = ["Hommes", "Femmes", "Famille"];
    const city = [
      "Lomé",
      "Kara",
      "Sokodé",
      "Dapaong",
       "Atakpamé",
       "Tsévié"
    ];

    const cityName = city.map((citys, index) => (
      <View key={index} style={styles.city}>
        <Text style={styles.textStyle}>{citys}</Text>
      </View>
    ));

    const rentFor = clusterFor.map((clusters, index) => (
      <TouchableOpacity key={index} onPress={this.forgot}>
        <View style={styles.city}>
          <Text style={styles.textStyle}>{clusters}</Text>
        </View>
      </TouchableOpacity>
    ));

    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title style={styles.titleMain}>Tableau de bord</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View style={styles.Container}>
            <ScrollView pagingEnabled={true}>
              <View>
                <Text style={styles.headerStyle}>Choix de la ville</Text>
                <View style={styles.elementsContainer}>{cityName}</View>
              </View>

              <View>
                <View>
                  <Text style={styles.headerStyle}>choix de préference</Text>
                  <View style={styles.elementsContainer}>{rentFor}</View>
                </View>
              </View>
            </ScrollView>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button full style={styles.ButtomCont}>
              <View>
                <TouchableOpacity onPress={this.landingScreen}>
                  <Text style={styles.applyButton}>Appliquer</Text>
                </TouchableOpacity>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  Container: {
    flex: 1
  },
  elementsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  titleMain: {
    fontSize: 18,
    fontWeight: "bold"
  },
  headerStyle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 4,
    paddingVertical: 10
  },
  city: {
    height: 40,
    width: 170,
    margin: 5,
    alignItems: "flex-end",
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#32B76C",
    paddingRight: 10
  },
  selected: {
    backgroundColor: "#32B76C"
  },
  textStyle: {
    paddingTop: 16,
    color: "#000"
  },
  ButtomCont: {
    flexDirection: "row",
    backgroundColor: "#32B76C",
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  applyButton: {
    color: "#fff",
    fontSize: 22
  }
});
