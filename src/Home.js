import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

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

      <Button onPress={() => navigation.navigate('Login')} title="Login" />
      <Button
        onPress={() => navigation.navigate('Cadastro')}
        title="Cadastro"
      />
    </View>
  );
};

// export default createAppContainer(Routes);
export default Home;
