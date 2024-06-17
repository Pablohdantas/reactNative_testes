import { StyleSheet, Text, View,TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

export default function CardUser(){
    return(
        <View style = {styles.container}>
            <View>
                <Text style = {styles.textStyles}>Pessoa nome</Text>
                <Text style = {styles.textStyles}>Pessoa idade</Text>
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
        margin:10,
      },
      textStyles:{
        color:"#ffffff",
        fontSize:20,
      }

});