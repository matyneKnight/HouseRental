import React, { Component } from "react";
import { Container, Title, Body, Header } from "native-base";
import { StyleSheet, View, Image, Text, Button, ScrollView, TouchableNativeFeedback } from "react-native";
import FooterBar from "./FooterBar";


export default class ContactScreen extends Component {

     constructor() {
        super();
        this.state = {
            contacts: undefined
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/?results=18").then(x => {
            const results = JSON.parse(x._bodyInit).results;
            this.setState({ contacts: results });
        });
    }



    drawContent(contact, index) {
        return (
            <TouchableNativeFeedback>
                <View style={styles.contact}>
                    <Image style={styles.image} source={{ uri: contact.picture.thumbnail }} />
                    <View>
                        <Text style={styles.contactName}>{contact.name.first} {contact.name.last}</Text>
                        <Text>C: {contact.cell}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }


  render() {
    return (
      <Container style={styles.containerBg}>

          <Header>
        <Body>
          <Title style={styles.titleMain}>Mes Contacts</Title>
        </Body>
        </Header>

          <View style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    {this.state.contacts && this.state.contacts.map((contact, index) => {
                        return this.drawContent(contact, index)
                    })}
                </ScrollView>
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
   container: {
        flex: 1,
        padding: 10
    },
    wrapper: {
        flex: 1,
        marginBottom: 10
    },
    contact: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'grey',
        marginBottom: 10
    },
    contactName: {
        fontWeight: '600'
    },
    image: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue',
        marginRight: 10
    }
});
