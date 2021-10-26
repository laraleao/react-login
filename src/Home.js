import React, {Component} from 'react';
import {View, Button, StyleSheet} from 'react-native';

class ButtonClick extends Component {
  onPressButton() {}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F2C9',
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    borderRadius: 4,
  },
});

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        style={{fontSize: 25}}
        onPress={onPressButton => navigation.navigate('Login')}
        title="Login"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('Cadastro')}
        title="Cadastro"
      />
    </View>
  );
};

export default Home;
