//import database from './config/Firebaseconfig';
import { useState } from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './config/Firebaseconfig';
import * as React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

export default function Login({ navigation }) {
  const [username, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [error, onChangeError] = React.useState("");
  
  /*const validLogin = {
    username: "olavo@gmail.com",
    password: "1234",
  };*/

  function userLogin(){
    
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      navigation.navigate("Home");
      const user = userCredential.user;
     // alert('Login Efetuado');
      console.log(user);
      
    })
    
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
    
    
  }

  /*const validateUser = () => {
   if (username === validLogin.username && password === validLogin.password) {
      navigation.navigate("Home");
      onChangeUserName("");
      onChangePassword("");
    } else {
      onChangeError("Usuário ou senha incorretos!");
    }
  };*/

  const validateUser2 = () => {
    navigation.navigate("Cadastro");

  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", marginTop: "2em" }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        placeholder="email"
        value={username}
        onFocus={(e) => onChangeError("")}
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        placeholder="senha"
        textContentType={password}
        secureTextEntry={true}
        value={password}
        onFocus={(e) => onChangeError("")}
      />
      <Text style={{ color: "red", marginBottom: "1em" }}>{error}</Text>
      <Button title="Entrar" onPress={() => userLogin()} />
      <br></br>
      <Button title="Cadastre-se" onPress={() => validateUser2()} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    
  },
});


