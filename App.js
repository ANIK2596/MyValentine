/*

  SAyantan GHosh{
    [Email: gsayantan01@gmail.com
    Github: www.https: //github.com/werfree
    ]

*/

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ToastAndroid,
  Text,
  SafeAreaView
} from "react-native";
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>SAyantan</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFF"
  }
});
