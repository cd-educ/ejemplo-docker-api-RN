import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function GetFactScreen() {

    const [frase, setFrase] = React.useState(null)

    function obtenerFrase(){
      axios.get("http://192.168.1.169:8001/facts")
        .then((resp) => {
          console.log(resp);
          setFrase(resp.data);
        })
        .catch((err) => console.log(err))
    }

    return (
        <View style={styles.container}>
    
          <Button
            title="Obtener frase"
            onPress={() => console.log("hola")}
          />
          {frase != null ?
            <>
              <Text>Perros: {frase.dogs}</Text> 
              <Text>Gatos: {frase.cats}</Text>
            </> 
          : null}
          <StatusBar style="auto" />
        </View>
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
    