import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2C9',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
  },

  text: {
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#003638',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'gray',
  },
});

const Cadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input}>Digite seu nome completo</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>E-mail</Text>
        <TextInput style={styles.input}>Digite seu e-mail</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.input}>Digite sua senha</TextInput>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>Confirme sua senha</Text>
        <TextInput style={styles.input}>Digite sua senha novamente</TextInput>
      </TouchableOpacity>

      <Button onPress title="Cadastrar" />
    </View>
  );
};

export default Cadastro;
