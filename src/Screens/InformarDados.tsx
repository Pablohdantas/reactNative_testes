import { StyleSheet, Text, View,TextInput,TouchableOpacity, SafeAreaView} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';


export default function InformarDados() {
  const [userName , setUserName] = useState("");
  const [userAge , setUserage] = useState("");
  const navigation = useNavigation();
  
  function handleSave(){
    alert("Dados do usuário salvo com sucesso!");
    console.log(`Nome:${userName} Idade:${userAge}`)
    setUserName("");
    setUserage("");
    navigation.navigate("Dados"); /**Um bug que está funcionando */

  }
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.containerFormulario}>
        <Text style={styles.containerFormularioTitulo}>Formulario para Obter informações</Text>
        <View style={styles.containerFormularioGeral}>
          <Text style={styles.containerFormularioTexto}>Nome:</Text>
          <TextInput style={styles.containerFormularioInputs} placeholder='Informe seu nome...' placeholderTextColor={"#696969"} value={userName} onChangeText={setUserName}>
          </TextInput>
          <Text style={styles.containerFormularioTexto}>Idade:</Text>
          <TextInput style={styles.containerFormularioInputs} placeholder='Informe sua idade...' placeholderTextColor={"#696969"}  keyboardType='numeric' value={userAge} onChangeText={setUserage}>
          </TextInput>
          <TouchableOpacity style={styles.containerFormularioGeralBotao} onPress={handleSave}>
            <Text style={{color:"#ffffff"}}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000000",
    borderWidth:2,
    borderTopWidth:0,
    borderBottomWidth:0,
    borderColor:"#ffffff",
    justifyContent:"center",
    alignItems:"center",
  },
  containerFormulario:{
    padding:10, 
    paddingTop:30,
    borderWidth:2,
    borderColor:"#ffffff",
    gap:100,
    alignItems:"center",
    justifyContent:"center",
  },
  containerFormularioTexto:{
    color:"#ffffff",
  },
  containerFormularioTitulo:{
    color:"#ffffff",
    fontSize:20,
  },
  containerFormularioInputs:{
    width:300,
    padding:10,
    height:50,
    borderWidth:2,
    color:"#ffffff",
    borderColor:"#ffffff",
  },
  containerFormularioGeral:{
    gap:10
  },
  containerFormularioGeralBotao:{
    width:300,
    height:50,
    borderWidth:2,
    borderColor:"#ffffff",
    marginBottom:30,
    justifyContent:"center",
    alignItems:"center",
  },
});
