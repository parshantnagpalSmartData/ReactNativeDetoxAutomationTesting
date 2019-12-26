/*
FileName: SampleAPiCall.js
Description: Conatins the sample Api Call
*/


import RestClient from "./RestClient";
import * as Types from "../../actionTypes";
import * as AppActions from "../app";
import Constants from "../../constants";

export const signIn = postData => {
  return dispatch => {
    dispatch(AppActions.startLoader());
    RestClient.restCall("users/login", postData)
      .then(res => {
        if (res.status) {
          dispatch(AppActions.stopLoader());
          dispatch({ type: Types.SAVE_USER, payload: res.result });
         dispatch(AppActions.pushToParticularScreen(componentId, "Dashboard"));
       
        } else {
          dispatch(AppActions.stopLoader());
          dispatch(
            AppActions.showToast(
              Constants.AppConstants.Notificaitons.Error,
              res.message
            )
          );
        }
      })
      .catch(e => {
        dispatch(AppActions.stopLoader());
        console.warn("error", e); // eslint-disable-line
      });
  };
};