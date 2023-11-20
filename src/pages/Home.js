//import database from './config/Firebaseconfig';
import { Picker } from "@react-native-picker/picker";
import * as React from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home({ navigation }) {
  const [valor, onChangeValor] = React.useState(1);
  const [moedaOrigem, onChangeMoedaOrigem] = React.useState("br");
  const [moedaDestino, onChangeMoedaDestino] = React.useState("br");
  const [valorConvertido, onChangeValorConvertido] = React.useState();


  const moedas = {
    br: {
       label: "R$",
      value: 'br',
      valueMoeda: 1
    },
    usd: {
      label: "USD",
      value: 'usd',
      valueMoeda: 5.15
    },
    eur:  {
      label: "EUR",
      value: 'eur',
      valueMoeda: 5.4
    },
    cny: {
      label: "CNY",
      value: 'cny',
      valueMoeda: 0.72
    }
  }

  React.useEffect(() => {
    onChangeValorConvertido(
      (valor * moedas[moedaOrigem].valueMoeda) / moedas[moedaDestino].valueMoeda
    );
  }, [moedaOrigem, moedaDestino, valor]);

  const converter = () => {
    navigation.navigate("Compra", {
      valor: valorConvertido,
      moeda: moedas[moedaDestino].label,
    });
  };

  const voltar = () => {
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
      <View>
    <TextInput
        style={styles.input}
        onChangeText={(e) => onChangeValor(Number(e))}
        placeholder="Insira um valor"
        value={valor}
        keyboardType="numeric"
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Picker
          style={styles.inputPicker}
          selectedValue={moedaOrigem}
          onValueChange={(itemValue, itemIndex) =>
            onChangeMoedaOrigem(itemValue)
          }
        >
          <Picker.Item label="R$" value="br" />
          <Picker.Item label="USD" value="usd" />
          <Picker.Item label="EUR" value="eur" />
          <Picker.Item label="CNY" value="cny" />
        </Picker>
        <Picker
          style={styles.inputPicker}
          selectedValue={moedaDestino}
          onValueChange={(itemValue, itemIndex) =>
            onChangeMoedaDestino(itemValue)
          }
        >
          <Picker.Item label="R$" value="br" />
          <Picker.Item label="USD" value="usd" />
          <Picker.Item label="EUR" value="eur" />
          <Picker.Item label="CNY" value="cny" />
        </Picker>
      </View>

      <View>
      {valorConvertido > 0 && <Text> <h1>Valor Convertido: {Number(valorConvertido).toFixed(2)}</h1></Text>}
      
      <br></br>
      <Button  title="Comprar?" onPress={() => converter()} />

      <br></br>
      <br></br>

      <Button  title="Voltar?" onPress={() => voltar()} />
      </View>
      </View>


    
    </SafeAreaView>

    

  );
}


const styles = StyleSheet.create({
  input: {

    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:50,
  },
  inputPicker: {
    width: "50%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:50,
  },
});
