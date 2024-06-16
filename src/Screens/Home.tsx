import { StyleSheet, Text, View,TextInput,SafeAreaView, ScrollView} from 'react-native';
import Header from '../../components/Header';
export default function Home() {
  return (
    <SafeAreaView  style={styles.container}> 
      <Header/>
      <ScrollView >
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
