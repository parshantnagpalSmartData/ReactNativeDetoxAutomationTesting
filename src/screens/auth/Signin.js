/*
 * @file: SignIn.js
 * @description: Contains the SignIn Container.
 * */
import React, {Component} from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Alert
} from "react-native";



import Constants from "../../constants/password"
import FloatingInput from "../../components/common/FloatingInput";
import {moderateScale} from "../../helpers/ResponsiveFonts";
import AuthButton from "../../components/common/AuthButton";
import Regex from "../../helpers/Regex";
import _ from "lodash";
import {goToParticularStack} from "../../config/navigation"

class SignInCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hidePassword: true,
      emailError: "",
      passwordError: "",
    };
    this.signUp = this.signUp.bind(this);
  }

  showPassword = () => {
    this.setState({
      hidePassword: !this.state.hidePassword,
    });
  };

  signIn = () => {
    Keyboard.dismiss();
    const {email, password} = this.state;
    if (_.isEmpty(email.trim())) {
   
       alert("Email is required") 
    
      return;
    }

    if (!Regex.validateEmail(email.trim())) {
     alert("Invalid Email format")
      // Alert.alert('Alert', 'Invalid Email format', [
      //   { text: 'Ok', onPress: () => { } }
      // ])
      return;
    }

    if (_.isEmpty(password.trim())) {
      alert("Password is required") 
      return;
    }
    let emailValue = email.toLowerCase();
    if((Constants.Auth.username === email) && (Constants.Auth.password === password) ){
    //  alert("login")
     goToParticularStack("Home")
    }else{
      alert("Please enter a valid email or password")
    }
    // this.props.AppAction.loginUser(
    //   emailValue,
    //   password,
    //   this.props.componentId,
    // );
  };
  signUp() {
    this.props.AppAction.pushToParticularScreen(
      this.props.componentId,
      "SignUp",
    );
  }

  forgotPassword = () => {
    this.props.AppAction.pushToParticularScreen(
      this.props.componentId,
      "ForgotPassword",
    );
  };
  focusNext(next) {
    this[next].focus();
  }

  render() {
    let {hidePassword, email, password, emailError, passwordError} = this.state;
    return (
      <View style={styles.container}>
          <View style={styles.signInView}>
            <Text style={styles.signInText}>Welcome</Text>
          </View>
          <View style={styles.paddingInputText}>
            <View style={styles.signInSubContainerView}>
           
            </View>
            <FloatingInput
             testID='email'
              ref={ref => (this.email = ref)}
              inputWrapper={styles.inputWrapper}
              label={"UserName"}
              value={email}
              onChangeText={email => {
                this.setState({email, emailError: ""});
              }}
              onSubmitEditing={() => {
                this.focusNext("password");
              }}
              autoCapitalize={"none"}
              keyboardType={"email-address"}
              returnKey={"next"}
            />
            <FloatingInput
             testID='password'
              ref={ref => (this.password = ref)}
              inputWrapper={styles.inputWrapper}
              label={"Password"}
              value={password}
              onChangeText={password => {
                this.setState({password, passwordError: ""});
              }}
              // icon={
              //   <Icon name={!hidePassword ? "eye" : "eye-slash"} size={20} />
              // }
              secureTextEntry={hidePassword}
              onIconPress={this.showPassword}
              returnKey={"done"}
              error={passwordError}
              onSubmitEditing={() => {
                this.signIn();
              }}
            />
          </View>
          <View style={styles.stylesAuthContainer}>
            <AuthButton
              testID='AuthButton'
              buttonName={"Sign In"}
              disabled={false}
              textStyle={styles.textStyle}
              buttonStyle={styles.signUpButtonStyle}
              gradientStyle={styles.gradientStyle}
              onPress={() => this.signIn()}
            />
          </View>
       
      </View>
    );
  }
}


export default SignInCustom;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#ffffff"},
  scrollStyle: {
    flex: 1,
  },
  signUpButtonStyle: {
    backgroundColor: "red",
    width: moderateScale(140),
    height: moderateScale(40),
  },

  gradientStyle: {
    borderRadius: moderateScale(20),
  },
  textStyle: {
    textAlign: "center",
    fontFamily: "Charter",
    fontWeight: "bold",
    fontSize: moderateScale(18),
  },
  paddingInputText: {
    paddingHorizontal: moderateScale(20),
  },
  stylesAuthContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: moderateScale(35),
  },

  forgotView: {justifyContent: "flex-start", alignItems: "flex-start"},
  signUpView: {
    backgroundColor: "white",
    width: moderateScale(100),
    borderColor: "#ffffff",
    borderWidth: moderateScale(1),
    paddingVertical: moderateScale(5),
    marginVertical: moderateScale(35),
    marginHorizontal: moderateScale(1),
  },
  inputWrapper: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: "#000000",
    color:  "#000000",
    // fontFamily: "Charter",
    height: moderateScale(48),
  },
  signUpButton: {
    // margin: moderateScale(0),
    // padding: moderateScale(20)
  },

  signUpText: {
    fontSize: moderateScale(21),
    color: "gray",
    textAlign: "center",
  },

  forgotButton: {
    paddingTop: moderateScale(5),
    paddingBottom: moderateScale(20),
  },
  signInView: {
    justifyContent: "center",
    alignItems: "center",
    padding: moderateScale(48),
  },

  signInText: {
    fontSize: moderateScale(30),
    color: "#000000",
    // fontFamily: Platform.OS == "ios" ? "Cochin-Bold" : "CochinBold"
    // fontWeight: Platform.OS == "ios" ? "bold" : "normal",
    // fontFamily: "Cochin-Bold"
  },
  signInInSubContainerText: {
    color: "gray",
    fontFamily: "Charter",
    textAlign: "center",
    fontSize: moderateScale(20),
  },

  signInSubContainerView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingBottom: moderateScale(15),
  },
  forgotText: {
    color: "#000000",
    fontFamily: "Charter",
    fontSize: moderateScale(18),
  },
});