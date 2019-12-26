/*
FileName: index.js
Description: Conatins the main navigation file 
*/

import {Navigation} from "react-native-navigation";
import {registerScreens} from "./src/config/routes";

Navigation.events().registerAppLaunchedListener(() => {

  registerScreens();
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: "SignIn"
          }
        }]
      }
    }
  });
 
  Navigation.setDefaultOptions({
    topBar: {
      visible: false,
      drawBehind: false,
    }
  });
});