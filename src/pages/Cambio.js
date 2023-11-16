//import database from './config/Firebaseconfig';
import { View } from 'react-native';
import { styles } from '../Style';

export default function Cambio({ route, navigation }) {
  
  const { valor, moeda } = route.params;



  return (
    <View styles={styles.Container}>
      <h1>Meus Parabéns</h1>
      <h1>Voce Comprou {valor.toFixed(2)} {moeda}</h1>
    </View>
  )
}