//import database from './config/Firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";
import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { auth } from "./config/Firebaseconfig";

export default function Login({ navigation }) {
  const [username, onChangeUserName] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [error, onChangeError] = React.useState("");

  /*const validLogin = {
    username: "olavo@gmail.com",
    password: "1234",
  };*/

  function userLogin() {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        navigation.navigate("Home");
        const user = userCredential.user;
        // alert('Login Efetuado');
        console.log(user);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        paddingTop: "2em",
        backgroundColor: "#afd2fa",
      }}
    >
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
      <View style={{flex: 1, gap: '2em',  width: '50%'}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => userLogin()}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
           style={styles.button}
          onPress={() => validateUser2()}
        >
           <Text style={styles.textButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
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
   button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  textButton: {
     color: "white"
   }
});