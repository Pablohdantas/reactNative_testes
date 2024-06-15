import { StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView} from 'react-native';

export default function Details({navigation}:any) {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View >
            <TouchableOpacity style={styles.containerFormularioGeralBotao} onPress={()=>navigation.navigate("Home")}>
            <Text style={{color:"#ffffff"}}>Ir para pagina Home</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
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
