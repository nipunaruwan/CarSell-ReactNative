import React from "react";
import { View ,Text,StyleSheet,Box} from "react-native";
import { NativeBaseProvider,Stack,Input,Image } from "native-base";
import { border } from "native-base/lib/typescript/theme/styled-system";
import Button from "../Component/Button";




export default function SingUP(){
return(
    <NativeBaseProvider style={style.pannel}>
       
         <Text style={style.text}></Text>
          <Stack  space={4} w="75%" maxW="300px" mx="auto" style={style.txtContainer}>
          <Input variant="rounded" placeholder=" name" />
          <Input variant="rounded" placeholder="Address" />
        <Input variant="rounded" placeholder="Contact" />
        <Input variant="rounded" placeholder="Email" />
        <Input variant="rounded" placeholder="password" />


        
       
      
      </Stack>  

      <Image
         style={{height:100, width:100,position:"absolute",top:30,left:145,right:100, backgroundColor: 'red',}} source={require('../assets/33-338711_circle-user-icon-blue-hd-png-download.png')}  />
     
   <Button Text="Register"/>
    </NativeBaseProvider>

);
}
const style = StyleSheet.create({
    pannel: {
        width: "1045%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
     borderStartColor:"white"
      },

    text:{
      
        color:'blue',
        fontSize:30,
        position:'relative',
        left:'40%',
        bottom:0,
        right:0,
        top:40
      },
  
 
    txtContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',   
        borderRadius: 800,   
      },

   
    

});