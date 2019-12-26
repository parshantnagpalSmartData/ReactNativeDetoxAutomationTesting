/*
 * @file: Navigation.js
 * @description: Contains the navigation Stacks.
 * */
import {Navigation} from "react-native-navigation";


export const goToParticularStack = screen =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "App",
        children: [
          {
            component: {
              name: screen,
              passProps: {
                text: "React Native",
              },
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                },
                layout: {
                  orientation: ["portrait"],
                },
              },
            },
          },
        ],
      },
    },
  });

