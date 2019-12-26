/*
File Name : AuthButton.js
Description : Contains the Auth Buttons.
*/

import React from "react";
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import PropsTypes from "prop-types";


import { moderateScale } from "../../helpers/ResponsiveFonts";
const Button = props => {
  let {
    buttonName,
    buttonStyle,
    gradientStyle,
    textStyle,
    onPress,
    arrow,
    gradientColors,
    loading,
    icon,
    disabled,
    testID
  } = props;

  return (
    <TouchableOpacity
      testID={testID}
      style={[Styles.buttonContainer, buttonStyle]}
      onPress={onPress}
      disabled={disabled}
    >
   
        {loading ? (
          <ActivityIndicator size="large" color={"#ffffff"} />
        ) : (
          <View>
            <View style={{ flexDirection: "row" }}>
              {icon ? icon : null}
              <Text style={[Styles.buttonText, textStyle]}>{buttonName}</Text>
            </View>
          </View>
        )}
     
      {/* <View style={{ flex: 0.7 }} /> */}
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  gradientStyle: {
    borderRadius: moderateScale(30),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: moderateScale(8)
  },
  buttonText: {
    fontFamily: "Helvetica",
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "#ffffff",
    textAlignVertical: "center",
    paddingHorizontal: moderateScale(5),
    textAlign: "center",
    width: "100%"
  },
  buttonContainer: {
    justifyContent : "center",
    alignItems : "center"
  }
});

/*
PropsTypes defined for Button 
*/
Button.propsTypes = {
  textStyle: PropsTypes.object
};
/*
Default props from Button 
*/
Button.defaultProps = {
  textStyle: {}
};

export default Button;
