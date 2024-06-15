import Home from "./src/Screens/Home";
import Dados from "./src/Screens/Dados";
import InformarDados from "./src/Screens/InformarDados";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator 
      screenOptions={{tabBarStyle:{
        backgroundColor:"#000000",
        borderTopWidth:0,
        height:80,
        bottom:10,
        position:"absolute"
      }}}
      >
        <BottomTab.Screen name="Home" component={Home}/>
        <BottomTab.Screen name="Dados" component={Dados}/>
        <BottomTab.Screen name="Informar dados" component={InformarDados}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

