import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function SaveFactScreen() {

    const [frase, setFrase] = React.useState("")

    function enviarFrase(){
      axios.post("http://192.168.1.169:8001/facts", {fact:frase})
        .then((resp) => {
          console.log(resp.status);
        })
        .catch((err) => console.log(err))
    }

    return (
        <View style={styles.container}>
    
          <TextInput
              placeholder='Frase'
              onChangeText={(text) => setFrase(text)}
          />
          
          <Button
            title="Enviar frase"
            onPress={() => console.log("hola")}
          />

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
    