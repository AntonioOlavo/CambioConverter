//import database from './config/Firebaseconfig';
import { View } from 'react-native';
import { styles } from '../Style';
import * as React from 'react';
import {Button,} from "react-native";


export default function Cambio({ route, navigation }) {
  
  const { valor, moeda } = route.params;

  const voltar2 = () => {
    navigation.navigate("Home", {
    });
  };

  const sair = () => {
    navigation.navigate("Home", {
    });
  };


  return (
    
    <View styles={styles.Container}>
      <h1>Meus Parabéns</h1>
      <h1>Voce Comprou {valor.toFixed(2)} {moeda}</h1>

      <br></br>
      <Button  title="Realizar Outra Compra?" onPress={() => voltar2()} />
      <br></br>
      <br></br>
      <Button  title="Sair?" onPress={() => sair()} />
    </View>


  )
} 

