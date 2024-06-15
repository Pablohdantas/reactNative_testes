import { StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
    <ScrollView style ={{width:"90%"}} >
     
      <Text style={{color:"#ffffff"}}>Aqui é a pagina Home</Text>
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
});
