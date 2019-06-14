import React, { Component } from "react";
import { Container, Title, Body, Header, Card, CardItem, Left, Right } from "native-base";
import { StyleSheet, Alert, View, Switch, FlatList, Text, TouchableOpacity } from "react-native";
import FooterBar from "./FooterBar";


export default class NotificationScreen extends Component {

  data = [
    {
      id: '1',
      imageUrl: require("../../assets/images2/img1.jpg"),
      title: "Appartement VIP",
      title2: "thème fond blanc",
      lat: "12",
      lon: "4",
      time: "11heures",
      price: "250000 F CFA / mois",
      place: "Pagouda",
      bhk: 16
    },
    {
      id: '2',
      imageUrl: require("../../assets/images2/img2.jpg"),
      title: "Appartement type campagne 2",
      title2: "luxueux, jardin",
      lat: "59",
      lon: "12",
      time: "1 jour",
      price: "300000 F CFA / mois",
      place: "Pagouda",
      bhk: 13
    },
    {
      id: '3',
      imageUrl: require("../../assets/images2/img3.jpg"),
      title: "Maison de vacance",
      title2: "cheminé, allées, rase-motte",
      lat: "102",
      lon: "102",
      time: "6 jours",
      price: "120000 F CFA / jour",
      place: "Lomé",
      bhk: 14
    },
    {
      id: '4',
      imageUrl: require("../../assets/images2/img4.jpg"),
      title: "Maison turc",
      title2: "espace dégagé, terasse",
      lat: "83",
      lon: "102",
      time: "16 heures",
      price: "50000 F CFA / jour",
      place: "Sokodé",
      bhk: 15
    },
    {
      id: '5',
      imageUrl: require("../../assets/images2/img5.jpg"),
      title: "Terrain à ciel ouvert",
      title2: "cloturé",
      lat: "84",
      lon: "102",
      time: "2 mois",
      price: "45000000 F CFA ",
      place: "Tsévié",
      bhk: 0
    },
    {
      id: '6',
      imageUrl: require("../../assets/images2/img6.jpg"),
      title: "Terrain de culture",
      title2: "jardin",
      lat: "98",
      lon: "102",
      time: "2 jours",
      price: "5000000 F CFA ",
      place: "Kpalimé",
      bhk: 0
    },
    {
      id: '7',
      imageUrl: require("../../assets/images2/img12.jpg"),
      title: "Appartement VIP",
      title2: "mur de glass, picine",
      lat: "2038",
      lon: "102",
      time: "5 jours",
      price: "480000 F CFA / mois",
      place: "Lomé",
      bhk: 9
    },
    {
      id: '8',
      imageUrl: require("../../assets/images2/img8.jpg"),
      title: "Maison",
      title2: "Allées, jardins, garage",
      lat: "1003",
      lon: "102",
      time: "3 heures",
      price: "200000000 F CFA ",
      place: "Kara",
      bhk: 12
    },
    {
      id: '9',
      imageUrl: require("../../assets/images2/img9.jpg"),
      title: "Maison de campagne",
      title2: "grenier",
      lat: "3032",
      lon: "102",
      time: "4 jours",
      price: "65000000 F CFA ",
      place: "Mango",
      bhk: 14
    },
    {
      id: '10',
      imageUrl: require("../../assets/images2/img10.jpg"),
      title: "Terrain reboisé",
      title2: "sol rocailleux",
      lat: "430",
      lon: "102",
      time: "4 mois",
      price: "45000000 F CFA ",
      place: "Dapaong",
      bhk: 0
    }
  ];
  dataBackup = [];

  constructor(props) {
    super(props);
    this.state = {
      data: this.data,
      dataBackup: this.data,
      switchValue: true
    };
  }

  showAlertMessage = (valTitle,valTitle2,valPlace,valPrice) => {
    Alert.alert(
        `${valTitle}`+' à '+`${valPlace}`,
        `${valTitle2}`+' | '+`${valPrice}`
    );
  }

  toggleSwitch = (value) => {
    this.setState({switchValue : !this.state.switchValue});
    if (!this.state.switchValue){
      this.setState({data : this.state.dataBackup});
    } else {
      this.setState({data : []});
    }
  }

  render() {
    return (
      <Container style={styles.containerBg}>

          <Header>
        <Body>
          <Title style={styles.titleMain}>Mes Notifications</Title>
        </Body>
            <Right>
            <Switch
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}/>
            </Right>
      </Header>

        <View style={styles.container}>
          <FlatList
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <Card title={null}>
                <TouchableOpacity onPress={ null}>
                <CardItem button onPress={() => this.showAlertMessage(rowData.title,rowData.title2,rowData.place,rowData.price)}>
                  <Left>
                    <Body>
                      <Text style={styles.place}>{rowData.title} à {rowData.place}</Text>
                      <Text style={styles.cfa}> {rowData.price}</Text>
                    </Body>
                  </Left>
                    <Text>il y a {rowData.time}</Text>
                </CardItem>
                </TouchableOpacity>
              </Card>
            );
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

        <FooterBar />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  containerBg: {
    backgroundColor: "#fff",
    flex: 1,
    marginTop: 10
  },
  titleMain: {
    fontSize: 19,
    fontWeight: "bold"
  },
  place: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -15
  },
  cfa: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -15,
    marginTop: 5,
    color: "#32B76C"
  },
});
