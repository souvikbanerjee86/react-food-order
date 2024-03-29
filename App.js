import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from "./components/Home"
import Detail from "./components/Detail"

const Stack = createStackNavigator()
const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Home"
               component={Home}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Detail"
               component={Detail}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

export default App
