import React from "react";
import { View ,Text,  StyleSheet,Box} from "react-native";
import { NativeBaseProvider,Stack,Input,Button } from "native-base";




export default function SingUP(){
return(
    <NativeBaseProvider >
         <Text style={style.text}>Bold</Text>
          <Stack  space={4} w="75%" maxW="300px" mx="auto" style={style.txtContainer}>
          <Input variant="outline" placeholder=" name" />
          <Input variant="outline" placeholder="Address" />
        <Input variant="outline" placeholder="Contact" />
        <Input variant="outline" placeholder="Email" />
        <Input variant="outline" placeholder="password" />
        <Button mb="2.5" mt="5" style={style.btn} size="sm">Signup</Button>
      </Stack>  
     
    
    </NativeBaseProvider>

);
}
const style = StyleSheet.create({
 
    txtContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',      
      },

    btn:{
     
      width:200,
      backgroundColor: 'blue'
    }

    text:{
      
        color:'blue',
        fontSize:50,
        position:'relative',
        left:'30%',
        bottom:0,
        right:0,
        top:40,
      },

});