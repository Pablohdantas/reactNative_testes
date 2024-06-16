import {StyleSheet, View} from 'react-native';

export default function Header() {
  return (
   <View style={styles.containerHeader}>
   </View>
  );
}

const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor:"#ffffff",
        opacity:0.5,
        height:40,
        top:0,
        position:"absolute",
        width:"100%",
    }
});
