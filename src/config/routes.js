/*
 * @file: routes.js
 * @description: Contains all routes registered.
 * */
import React from "react";
import {Navigation} from "react-native-navigation";
//Screens
import SignIn from "../screens/auth/Signin";
import Home from "../screens/Dashboard/Home";





/* eslint-enable */

export const registerScreens = () => {

  // Auth stack
  Navigation.registerComponent(
    "SignIn",
    () =>
     SignIn,
  );

  Navigation.registerComponent(
    "Home",
    () => Home,
  );
 
};