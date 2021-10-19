import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
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
