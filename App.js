import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color:'red'}}>Open up App.js to start working on your app!</Text>
      <Text style={[styles.texto, {color:'blue'}]}>Estilização de linha por grupo ( StyleSheet)</Text>
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
   fontSize: 32, 
  },
});
