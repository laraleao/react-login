import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Login</Text>
        <TextInput>Digite seu e-mail</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{color: 'black'}}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
