import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform ,ImageBackground} from 'react-native';
import { NativeBaseProvider,Stack,Input,Icon,Ionicons,Center } from "native-base";
import Button from '../Component/Button';
import Uploadbtn from '../Component/Uploadbtn';
export default function Vehicle() {

 
  return (
    <NativeBaseProvider style={style.pannel}>
         

         <Text style={style.text}></Text>
          <Stack  space={4} w="75%" maxW="300px" mx="auto" style={style.txtContainer}>
        


          <Input variant="rounded" placeholder=" name" />
          <Input variant="rounded" placeholder="ID" />
        <Input variant="rounded" placeholder="address" />
        <Input variant="rounded" placeholder="contact" />
        <Input variant="rounded" placeholder="Email" />



        
      
    
    
      </Stack>  

      <Image
         style={{height:100, width:100,position:"absolute",top:30,left:145,right:100, backgroundColor: 'blue',}} source={require('../assets/user.png')}  />
    
    <Button Text="Submit"/>

    <Center flex={-10} px="4">
    <Uploadbtn />
            </Center>
    

    </NativeBaseProvider>
  )
}

const style = StyleSheet.create({
    pannel: {
        width: "1045%",
        height: "10%",
        display: "flex1",
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
        flex:70,
        justifyContent:'center',
        alignItems:'center',   
        borderRadius: 700,   
      },

      img: {
        position:'absolute',
        flex: 1,
  width:900,
  height:600,
        justifyContent: "center"
      },

    });