/*
File Name : FloatingInput.js
Description : Contains the common InputText.
*/

import React, { Component } from "react";
import {
  View,
  TextInput,
  // Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Platform
} from "react-native";
import PropsTypes from "prop-types";

import { moderateScale } from "../../helpers/ResponsiveFonts";



class FloatingInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      value: this.props.value
    };
  }



  handleFocus = () => {
    this.toolTip && this.toolTip.hideModal();
    this.setState({ isFocused: true });
  };
  handleBlur = () => {
    this.toolTip && this.toolTip.hideModal();
    this.setState({ isFocused: false });
  };
  focus() {
    this.inputBox.focus();
  }

  render() {
    const {
      label,
      value,
      value1,
      editable,
      onCancel,
      onUpdate,
      loading,
      returnKey,
      icon,
      onIconPress,
      secureTextEntry,
      onChangeText,
      onSubmitEditing,
      container,
      error,
      inputWrapper,
      autoFocus,
      keyboardType,
      testID,
      ...props
    } = this.props;
    const { isFocused } = this.state;
   

    return (
      <View style={[Styles.container, container]}>
        {/* {error || value || isFocused ? (
          <Text style={labelStyle}>{label}</Text>
        ) : null} */}
        <View
          style={[
            Styles.inputWrapper,
            {
              borderColor: error
                ? "red"
                : "blue"
            },
            inputWrapper
          ]}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <TextInput
             testID={testID}
              ref={ref => (this.inputBox = ref || "inputbox")}
              style={[
                Styles.inputStyle,
                {
                  color: editable
                    ? "red"
                    : "blue"
                }
              ]}
              autoFocus={autoFocus}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              value={value}
              editable={editable}
              returnKeyType={returnKey}
              placeholder={!isFocused ? label : null}
              secureTextEntry={secureTextEntry}
              onChangeText={onChangeText}
              keyboardType={keyboardType}
              onSubmitEditing={onSubmitEditing}
              {...props}
            />
          </View>
      
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    paddingVertical: moderateScale(10)
  },
  inputStyle: {
    flex: 1,
    fontSize: moderateScale(17),
    fontFamily: "Helvetica",
    ...Platform.select({
      ios: {
        height: moderateScale(30)
      }
    })
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
    // borderWidth: 1,
    // borderColor: Constants.Colors.Secondary,
    // borderRadius: moderateScale(10),
    // paddingHorizontal: moderateScale(20)
  },
  cancelImg: {
    backgroundColor: "#A9AFAF",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  submitImg: {
    backgroundColor: "#F6CF65",
    width: 30,
    height: 30,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  },
  pad5: { padding: 5 }
});

/*
PropsTypes defined for Button 
*/
FloatingInput.propsTypes = {
  container: PropsTypes.object,
  inputWrapper: PropsTypes.object,
  autoFocus: PropsTypes.bool,
  keyboardType: PropsTypes.string
};
/*
Default props from Button 
*/
FloatingInput.defaultProps = {
  container: {},
  inputWrapper: {},
  autoFocus: false,
  keyboardType: "default"
};

export default FloatingInput;
