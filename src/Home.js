import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';

class ButtonClick extends Component {
  _onPressButton() {}
}

const Home = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'lightblue',
        padding: 10,
        flex: 1,
        justifyContent: 'center',
      }}>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: 'black'}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={{color: 'black'}}>Cadastro</Text>
      </TouchableOpacity> */}

      <Button onPress={() => this._onPressButton} title="Login" />
      <Button onPress={() => this._onPressButton} title="Cadastro" />
    </View>
  );
};

export default Home;
