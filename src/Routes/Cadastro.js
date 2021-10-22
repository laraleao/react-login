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
    <View
      style={{
        backgroundColor: 'lightblue',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
      }}>
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
        <TextInput>Digite sua senha</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Confirme sua senha</Text>
        <TextInput>Digite sua senha novamente</TextInput>
      </TouchableOpacity>

      {/* <Button submit={() => navigation.navigate('Cadastro')} title="Logar" /> */}
    </View>
  );
};

export default Cadastro;
