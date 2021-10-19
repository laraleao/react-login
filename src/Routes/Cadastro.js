import React from 'react';
import {
  Text,
  View,
  //   StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Cadastro = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Nome</Text>
        <TextInput>Digite seu nome completo</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>E-mail</Text>
        <TextInput>Digite seu e-mail</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Senha</Text>
        <TextInput>Digite ssua senha</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Confirme sua senha</Text>
        <TextInput>Digite sua senha novamente</TextInput>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
