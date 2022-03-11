import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";

const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textView}>Hello World</Text>
      <Button
          title="SignUp"
        />
    </View>

  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    fontWeight: "bold",
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center'
  },
  textView: {
    alignContent:'center',
    marginTop: 30
    //color: '#fff',
  }
});


export default SignUp;