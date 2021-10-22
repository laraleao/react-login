import React from 'react';
import {
  Text,
  View,
  //   StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white'}}>Login</Text>
        <TextInput>Digite seu e-mail</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'white'}}>Senha</Text>
        <TextInput>Digite sua senha</TextInput>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
