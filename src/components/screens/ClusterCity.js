import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity
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
export default class ClusterCity extends Component {
  data = [
    {
      imageUrl: require("../../assets/images/1.png"),
      title: "Lomé",
      title2: "3 annonces"
    },
    {
      imageUrl: require("../../assets/images/2.png"),
      title: "Kara",
      title2: "2 annonces"
    },
    {
      imageUrl: require("../../assets/images/3.png"),
      title: "Sokodé",
      title2: "1 annonce"
    },
    {
      imageUrl: require("../../assets/images/4.png"),
      title: "Dapaong",
      title2: "1 annonce"
    },
    {
      imageUrl: require("../../assets/images/5.png"),
      title: "Atakpamé",
      title2: "1 annonce"
    },
    {
      imageUrl: require("../../assets/images/6.png"),
      title: "Tsévié",
      title2: "1 annonce"
    },
    {
      imageUrl: require("../../assets/images/10.jpeg"),
      title: "Kpalimé",
      title2: "1 annonce"
    },
    {
      imageUrl: require("../../assets/images/11.png"),
      title: "Pagouda",
      title2: "2 annonces"
    },
    {
      imageUrl: require("../../assets/images/12.png"),
      title: "Mango",
      title2: "1 annonce"
    }
  ];

  constructor(props) {
    super(props);
    this.state = {
      data: this.data
    };
  }
  selectRooms() {
    Actions.selectRooms();
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={this.state.data}
          renderItem={({ item: rowData }) => {
            return (
              <TouchableOpacity onPress={this.selectRooms}>
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
                </Card>
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
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
  }
});
