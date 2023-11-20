import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { auth } from './config/Firebaseconfig';



export default function Cadastro ({ navigation }) {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [number2, onChangeNumber2] = React.useState("");
  //const [Error2, onChangeError2] = React.useState("");
 
  function newUser(){
    if(text === ''|| number === '' || number2 === '' ){
      alert('Todos os Campos Devem ser Preenchidos');
      return;
    } if (number !== number2){
      alert(' A senha e a Confirmação não são iguais');
      return;
    }else{
      createUserWithEmailAndPassword( auth, text, number)
      .then((UserCredencial) => {
        const user = UserCredencial.user;
        alert(' O usuario ' + text + 'foi Criado Faça O Login');
        navigation.navigate("Login");
       // router.Login('/');
      })

      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        router.Login('/');
      });
      
    }
  }


  //const validaConta = () => {
   // if (text === validCadastro.text && number === validCadastro.number ){
    //  navigation.navigate("Home");
     // onChangeText("");
    //  onChangenumber("");
   // }else{
    // onChangeError2("Usuário ou senha incorretos!");
    //}
  //}

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: "2em",
        backgroundColor: "#afd2fa",
      }}
      >         <TextInput
        style={styles.input}
        placeholder="Coloque um E-mail Para Cadastro"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        onChangeText={onChangeText}
        value={text}
        
  
      />
      <TextInput
        style={styles.input}
        placeholder="Coloque Sua Senha"
        autoCapitalize="none"
        onChangeText={onChangeNumber}
        value={number}
        textContentType={number}
        secureTextEntry={true}

      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        autoCapitalize="none"
        textContentType={number2}
        placeholder="Coloque Sua Senha Novamente"
        secureTextEntry={true}
      />

      

      <Text style={{ color: "red", marginBottom: "1em" }}>{}</Text>
      <Button title="Cadastrar" onPress={() => newUser()} />


      
      
    </SafeAreaView>

    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
