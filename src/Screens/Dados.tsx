import { StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Header from '../../components/Header';


export default function Dados() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView>
        <View >
           
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
 
});
