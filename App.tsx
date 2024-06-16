import Home from "./src/Screens/Home";
import Dados from "./src/Screens/Dados";
import InformarDados from "./src/Screens/InformarDados";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator 

      screenOptions={{
        tabBarActiveTintColor:"#ffffff",
        tabBarStyle:{
        backgroundColor:"#000000",
        borderWidth:2,
        height:100,
        borderTopWidth:0,
        borderBottomWidth:0,
        justifyContent:"center",
        borderColor:"#ffffff",
      }}}
      >
        <BottomTab.Screen name="Home" component={Home} options={{
            headerShown:false,
            tabBarIcon:({color,size,focused})=>{
              if(focused){
                return <Ionicons name="home" size={size} color={color}/>
              }
              return <Ionicons name="home-outline" size={size} color={color}/>
            }
        }}/>
        <BottomTab.Screen name="Dados" component={Dados} options={{
            headerShown:false,
            tabBarIcon:({color, size, focused})=>{
              if(focused){
                return <MaterialIcons name="storage" size={size} color={color} />
              }
              return <MaterialIcons name="storage" size={size} color={color} />
            }

        }}/>
        <BottomTab.Screen name="Informar dados" component={InformarDados} options={{
            headerShown:false,
            tabBarIcon:({color, size, focused})=>{
              if(focused){
                return <Ionicons name="information-circle" size={size} color={color}/>
              }
              return <Ionicons name="information-circle-outline" size={size} color={color}/>

            }

        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

