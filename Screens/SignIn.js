import React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";

const SignIn = ({navigation}) => {
  return (
    <View style={styles.mainView}>
      <Text>Sign In</Text>
      <Button
          title="Sign Up Screen"
          onPress={() => navigation.navigate('signUp')}
        />
    </View>

  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 80,
    fontWeight: "bold",
    flexDirection:'column',
    alignContent:'center',
    justifyContent:'center'
  },
  textView: {
    justifyContent:'center',
    alignContent:'center',
    marginTop: 30
    //color: '#fff',
  }
});


export default SignIn;