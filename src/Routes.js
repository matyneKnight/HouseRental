import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import Signin from "./components/auth/auth-pages/Signin";
import Signup from "./components/auth/auth-pages/Signup";
import Forgot from "./components/auth/auth-pages/Forgot";
import Dashboard from "./components/screens/Dashboard";
import LandingScreen from "./components/screens/LandingScreen";
import SelectRooms from "./components/screens/SelectRooms";
import ClusterMap from "./components/screens/ClusterMap";
import SearchFilter from "./components/screens/SearchFilter";
import AccountScreen from "./components/screens/AccountScreen";
import ContactScreen from "./components/screens/ContactScreen";
import NotificationScreen from "./components/screens/NotificationScreen";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene
            key="signin"
            component={Signin}
            title="Signin"
            initial={true}
          />
          <Scene key="signup" component={Signup} title="Register" />
          <Scene key="forgot" component={Forgot} title="Forgot Password" />
          <Scene key="dashboard" component={Dashboard} title="Dashboard" />
          <Scene
            key="landingScreen"
            component={LandingScreen}
            title="LandingScreen"
          />
          <Scene
            key="selectRooms"
            component={SelectRooms}
            title="SelectRooms"
          />
          <Scene key="clusterMap" component={ClusterMap} title="clusterMap" />
          <Scene
            key="searchFilter"
            component={SearchFilter}
            title="searchFilter"
          />
          <Scene key="accountScreen" component={AccountScreen} title="AccountScreen" />
          <Scene key="contactScreen" component={ContactScreen} title="ContactScreen" />
          <Scene key="notificationScreen" component={NotificationScreen} title="NotificationScreen" />
        </Stack>
      </Router>
    );
  }
}
