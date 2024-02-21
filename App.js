import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={[styles.numero, {color:'black'}]}>21</Text>
      <Text style={[styles.sala, {backgroundColor:'pink'}]}>I2HN</Text>
      <Text style={[styles.texto, {color:'blue'}]}>João Pedro Araújo Teixeira</Text>
      <Text style={[styles.texto2, {color:'red', backgroundColor:'blue'}]}>21/02/2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
   fontSize: 30, 
   fontWeight: 'bold',
   alignItems: 'center',
   justifyContent: 'center',
   left: '30%',
  },
  texto2: {
    fontSize: 20, 
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    left: '30%',
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    marginBottom: 30,
   },
  numero: {
    fontSize: 25, 
    fontStyle: 'italic',
    alignItems: 'center',
    justifyContent: 'center',
    right: '30%',
    top: '25%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 30,
   },
   sala:{
   fontSize: 20,
   }
});
