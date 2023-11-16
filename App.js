import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { StyleSheet } from 'react-native';
import Cambio from './src/pages/Cambio.js';
import Home from './src/pages/Home.js';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import {StatusBar}  from 'expo-status-bar';
//import Cadastro from './src/Style';
import React from 'react';
import {ImageBackground, StyleSheet, Image, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//import * as React from 'react';
//import { NavigationContainer, DefaulTheme} from 'react-native';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>

      

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Cambio Converter APP"
          component={Login}
          options={{headerTintColor:"blue"}}
        />
        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Compra" component={Cambio} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});






