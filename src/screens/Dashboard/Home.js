/*
 * @file: Dashboard.js
 * @description: Contains the Home Container.
 * */
import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {goToParticularStack} from "../../config/navigation"
import {moderateScale} from "../../helpers/ResponsiveFonts";
import AuthButton from "../../components/common/AuthButton";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  logOut(){
    goToParticularStack("SignIn")
    alert("Successfully Logout")
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>{"You are on Dashboard"}</Text>
       <View style={styles.stylesAuthContainer}>
            <AuthButton
              testID='Logout'
              buttonName={"Logout"}
              disabled={false}
              textStyle={styles.textStyle}
              buttonStyle={styles.signUpButtonStyle}
              gradientStyle={styles.gradientStyle}
              onPress={() => this.logOut()}
            />
          </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent : "center",
    alignItems : "center"
    // backgroundColor: Constants.Colors.dashboardLightGrey,
  },
  stylesAuthContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(35),
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Charter",
    fontWeight: "bold",
    fontSize: moderateScale(18),
  },
  signUpButtonStyle: {
    backgroundColor: "red",
    width: moderateScale(140),
    height: moderateScale(40),
  },
  gradientStyle: {
    borderRadius: moderateScale(20),
  },
  headerStyle: {
  },
  tabBarUnderlineStyle: {backgroundColor: "green"},
});
