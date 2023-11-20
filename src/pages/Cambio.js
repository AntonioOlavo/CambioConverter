//import database from './config/Firebaseconfig';
import * as React from 'react';
import { Button, SafeAreaView, Text } from "react-native";


export default function Cambio({ route, navigation }) {
  
  const { valor, moeda } = route.params;

  const voltar2 = () => {
    navigation.navigate("Home", {
    });
  };

  const sair = () => {
    navigation.navigate("Login", {
    });
  };


  return (
    
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: "2em",
        backgroundColor: "#afd2fa",
      }}
      >   
      <Text style={{fontSize: '2em'}}><h1>Parabéns</h1></Text>
      <Text style={{ fontSize: '1.2em' }}>Você Comprou
        <Text style={{marginLeft: '1em' ,fontWeight: 700}}>
        {valor.toFixed(2)} {moeda}
        </Text>
        </Text>

      <br></br>
      <Button  title="Realizar Outra Compra?" onPress={() => voltar2()} />
      <br></br>
      <br></br>
      <Button  title="Sair?" onPress={() => sair()} />
    </SafeAreaView>


  )
} 

