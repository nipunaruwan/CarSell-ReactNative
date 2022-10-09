import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider,Stack,Input,Icon,Button,Ionicons, Center } from "native-base";
import { VectorEffectProps,arrowdown } from 'react-native-svg';




export default function Uploadbtn() {
  return (
    <NativeBaseProvider >
       
  

<Button leftIcon={<Icon  name="cloud-upload-outline" size="sm" />}

style={{
  
  justifyContent:'flex-start',
  display:'flex',
 textAlign: "center",
   padding: 0,
   margin:0,
    width:90,
    height:45,
   top:-520,
   right:10,
   left:-45,
   position:'absolute',
  }}>
    
Upload
  
 </Button>

</NativeBaseProvider>
  )
}