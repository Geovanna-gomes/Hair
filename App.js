import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Home/Home';
import Tab from './src/Tab/Tab';


const Navegacao = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator
        initialRouteName='Login'
      >
        <Navegacao.Screen name='Tab' component={Tab}/>

        <Navegacao.Screen name='Login' component={Login}/>
        
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}

