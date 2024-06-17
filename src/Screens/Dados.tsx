import { StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import CardUser from '../../components/CardUser';


export default function Dados() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.containerHeader}><Text style = {{color:"#ffffff",fontSize:20,}}>Dados</Text></View>
      <ScrollView style={{width:"80%", maxWidth:500,}}>
        <View style = {{borderWidth:2, borderColor:"white"}}>
          <CardUser/>
          <CardUser/>
        </View>
      </ScrollView>
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
  containerHeader:{
    width:"100%",
    marginBottom:30,
    alignItems:"center",
  }
});
