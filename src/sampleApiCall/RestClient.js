/*
 * @file: RestClient.js
 * @description: Rest Client
*/

"use strict";

import Connection from "../config/Connection";
import { NetInfo, Alert, Platform } from "react-native";
class RestClient {
  static isConnected() {
    let context = this;
    return new Promise(function(fulfill, reject) {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) fulfill(isConnected);
        else {
          reject(isConnected);
        }
      });
    });
  }
  static restCall(url, params, token = null, type = "POST") {
    let context = this;
    console.log(type, " call", Connection.getResturl() + url, params, token);
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(Connection.getResturl() + url, {
            method: type,
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "Cache-Control": "no-cache",
              Authorization: token
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              console.log("POST responseText*****", responseText);
              fulfill(JSON.parse(responseText));
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
  static getCall(url, token = null) {
    let context = this;
    console.log("get call", Connection.getResturl() + url, token);
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(Connection.getResturl() + url, {
            method: "GET",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "Cache-Control": "no-cache",
              Authorization: token
            }
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              console.log(" get call responseText*****", responseText);
              fulfill(JSON.parse(responseText));
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
  static delCall(url, token = null) {
    let context = this;
    console.log("delete call", url, token);
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          fetch(Connection.getResturl() + url, {
            method: "Delete",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "Cache-Control": "no-cache",
              Authorization: token
            }
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              console.log("Del responseText*****", responseText);
              fulfill(JSON.parse(responseText));
            })
            .catch(error => {
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
  static post(url, params, deviceToken = null, deviceType = null) {
    let context = this;
    console.log("login details->", url, params, deviceToken, deviceType);
    return new Promise(function(fulfill, reject) {
      context
        .isConnected()
        .then(() => {
          console.log(
            "url=> ",
            Connection.getResturl() + url,
            " requestObject=> ",
            params
          );
          fetch(Connection.getResturl() + url, {
            method: "POST",
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // "Cache-Control": "no-cache",
              "device-type": deviceType,
              "device-token": deviceToken
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              console.log("POST responseText*****", responseText);
              fulfill(JSON.parse(responseText));
            })
            .catch(error => {
              //   debugger;
              fulfill({
                message:
                  "The server is not reachable right now, sorry for inconvenience."
              });
              console.warn("eroro", error);
            });
        })
        .catch(error => {
          console.log("eroro ********* ", error);
          fulfill({
            message: "Please check your internet connectivity."
          });
        });
    });
  }
}

export default RestClient;
