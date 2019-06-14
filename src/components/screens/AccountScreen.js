import React, { Component } from "react";
import { Container, Title, Body, Header } from "native-base";
import { StyleSheet, View, Image, Text } from "react-native";
import FooterBar from "./FooterBar";


export default class AccountScreen extends Component {
  render() {
    return (
      <Container style={styles.containerBg}>

          <Header>
        <Body>
          <Title style={styles.titleMain}>Mon compte</Title>
        </Body>
      </Header>

        <View style={styles.content}>
        <View style={styles.header}></View>
        <View style={styles.footer}><Text>Will Smith</Text></View>
        <Image style={styles.avatar} source={require('./../../assets/images2/user.jpg')}></Image>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={{fontSize: 21}}>Username : Will Smith</Text>
            <Text style={{fontSize: 17}}>Email : willsmith34@gmail.com</Text>
            <Text style={{fontSize: 17}}>Telephone 1 : +228 98 35 42 41</Text>
            <Text style={{fontSize: 17}}>Telephone 2 : +228 93 64 00 94</Text>
            <Text style={{fontSize: 17}}>Adresse : Tokoin Ouest, Lomé</Text>
          </View>
        </View>
        <View style={styles.header2}></View>
      </View>

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
  },
  titleMain: {
    fontSize: 19,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
  },
  header:{
    backgroundColor: 'rgba(12,141,255,0.66)',
    height: 110,
  },
   header2:{
    backgroundColor: 'rgba(12,141,255,0.66)',
    height: 80,
    marginTop: 100,
  },
  avatar : {
    width: 180,
    height: 180,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 50
  },
  body : {
    marginTop: 40,
  },
  bodyContent : {
    flex: 1,
    alignItems: 'center',
    padding: 1,
    margin: -35,
  },
  footer:{
    backgroundColor: '#fff',
    height: 110,
    alignItems: 'center',
    paddingTop: 25,
  },
});
