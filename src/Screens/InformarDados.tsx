import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

export default function InformarDados({navigation}:any) {
  return (
    <View style={styles.container}>
      <View style={styles.containerFormulario}>
        <Text style={styles.containerFormularioTitulo}>Formulario para Obter informações</Text>
        <View style={styles.containerFormularioGeral}>
          <Text style={styles.containerFormularioTexto}>Nome:</Text>
          <TextInput style={styles.containerFormularioInputs} placeholder='Informe seu nome...' placeholderTextColor={"#696969"}>
          </TextInput>
          <Text style={styles.containerFormularioTexto}>Idade:</Text>
          <TextInput style={styles.containerFormularioInputs} placeholder='Informe sua idade...' placeholderTextColor={"#696969"}>
          </TextInput>
          <TouchableOpacity style={styles.containerFormularioGeralBotao}>
            <Text style={{color:"#ffffff"}}>Enviar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.containerFormularioGeralBotao} onPress={()=>navigation.navigate("Home")}>
            <Text style={{color:"#ffffff"}}>Ir para pagina Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000000",
    borderWidth:2,
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
