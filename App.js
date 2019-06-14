import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Routes from "./src/Routes";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    };
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    this.setState({ showRealApp: true });
  };
  render() {
    if (this.state.showRealApp) {
      return (
        <View style={styles.container}>
          <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
          <Routes />
        </View>
      );
    } else {
      return (
        <AppIntroSlider
          textStyle={styles.textStyle}
          slides={slides}
          onDone={this._onDone}
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  text: {
    color: "#fff",
    fontSize: 22
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
    marginTop: 16
  },
  container: {
    flex: 1
  }
});

const slides = [
  {
    key: "s1",
    text: "Le meilleur moyen de trouver un bien immobilier",
    title: "Bienvenu",
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require("./src/assets/images/step1.png"),
    imageStyle: styles.image,
    backgroundColor: "#20d2bb"
  },
  {
    key: "s2",
    title: "Trouver votre maison, appartement ou terrain",
    titleStyle: styles.title,
    textStyle: styles.text,
    text: "Option de proximité pour votre préference",
    image: require("./src/assets/images/step2.png"),
    imageStyle: styles.image,
    backgroundColor: "#febe29"
  },
  {
    key: "s3",
    title: "Géo-localisation",
    titleStyle: styles.title,
    textStyle: styles.text,
    text: "Localisé votre choix sur une carte",
    image: require("./src/assets/images/step3.png"),
    imageStyle: styles.image,
    backgroundColor: "#22bcb5"
  },
  {
    key: "s4",
    title: "Super Offre",
    titleStyle: styles.title,
    textStyle: styles.text,
    text: "Profitez de toutes les fonctionnalité",
    image: require("./src/assets/images/step4.png"),
    imageStyle: styles.image,
    backgroundColor: "#40739e"
  },
  {
    key: "s5",
    title: "Parrainer des amis",
    titleStyle: styles.title,
    textStyle: styles.text,
    text: "Béneficié d'un bonus de partage",
    image: require("./src/assets/images/step5.png"),
    imageStyle: styles.image,
    backgroundColor: "#60a3bc"
  },
  {
    key: "s6",
    title: "Equipements de maison",
    titleStyle: styles.title,
    textStyle: styles.text,
    text: "Vous pourrez consulter tous les détails",
    image: require("./src/assets/images/step6.png"),
    imageStyle: styles.image,
    backgroundColor: "#febe29"
  }
];
