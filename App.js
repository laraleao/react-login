import React from 'react';
import {createNativeNavigator} from 'react-navigation';
// import {createStackNavigator} from '@react-navigation-stack';
import Login from './src/Routes/Login';
import Cadastro from './src/Routes/Cadastro';
import Home from './src/Home';

const Stack = createNativeNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Login" component={Login} />

      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
};

export default App;
