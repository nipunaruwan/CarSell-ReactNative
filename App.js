import { View, Text } from 'react-native'
import React from 'react'

import Login from './Screens/Login';
import SingUP from './Screens/SingUP';
import Button from './Component/Button';
import Vehicle from './Screens/Vehicle';
import Home from './Screens/Home';
import Loader from './Component/Loader';
import Loadall from './Component/Loadall';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
  
<NavigationContainer>
<Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUP" component={SingUP} />
      <Stack.Screen name="Vehicle" component={Vehicle} />
    </Stack.Navigator>

</NavigationContainer>
   
    
    // <SingUP/>

//  <Vehicle />
//  <Home/> 
/* <Login/> */
   
  //  <Loader/>
  );
}