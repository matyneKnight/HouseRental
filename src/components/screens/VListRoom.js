import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";

import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { Actions } from "react-native-router-flux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import BodyLanding from "./BodyLanding";

export default class VListLanding extends Component {
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
  constructor(props) {
    super(props);
    this.state = {
      data: this.data,
      text: ''
    };
    this.arrayholder = this.data;
  }
  selectRooms() {
    Actions.selectRooms();
  }

  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      data: newData,
      text: text,
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBoxBlock}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          onChangeText={text => this.SearchFilterFunction(text)}
          placeholder="Tapez un mot clé"
          placeholderTextColor="#333"
          selectionColor="#fff"
        />
      </View>

        <FlatList
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <Card title={null} image={{ url: rowData.imageUrl }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={rowData.imageUrl} {...this.props} />
                    <Body>
                      <Text style={styles.titleSecond}>{rowData.title}</Text>
                      <Text style={styles.subTitle}>{rowData.title2}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <TouchableOpacity onPress={this.selectRooms}>
                  <CardItem cardBody>
                    <Image
                      style={{ height: 150, width: null, flex: 1 }}
                      source={rowData.imageUrl}
                      {...this.props}
                    />
                  </CardItem>
                </TouchableOpacity>

                <CardItem>
                  <Left>
                    <Body>
                      <Text style={styles.place}>{rowData.place}</Text>
                      <Text style={styles.bhk}> {rowData.bhk} pièces </Text>
                      <Text style={styles.cfa}> {rowData.price}</Text>
                    </Body>
                  </Left>
                    <Text>Publié il y a {rowData.time}</Text>
                </CardItem>

              </Card>
            );
          }}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  horiScroll: {
    borderRadius: 5,
    backgroundColor: "red"
  },

  subTitle: {
    fontSize: 12,
    color: "#32B76C",
    fontWeight: "bold",
    marginTop: 5
  },
  titleSecond: {
    fontSize: 16,
    fontWeight: "bold"
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 0,
    padding: 0
  },
  place: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -15
  },
  bhk: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -15,
    marginTop: 5,
    color: "#003EB7"
  },
  cfa: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: -15,
    marginTop: 5,
    color: "#32B76C"
  },
  inputBoxBlock: {
    paddingHorizontal: 10
  },
  inputBox: {
    width: "100%",
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 0,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 0.5,
    borderColor: "#000",
    fontSize: 16,
    color: "#000",
    marginVertical: 10
  }
});
