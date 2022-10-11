import React, { useState } from 'react'
import { View ,Text,StyleSheet,Box,Alert } from "react-native";
import { NativeBaseProvider,Stack,Input,Image,TouchableOpacity} from "native-base";

import Button from "../Component/Button";




export default function SingUP() {

  // const[name,setName]=useState('');
  // const[Address,setAddress]=useState('');
  // const[Contact,setContact]=useState('');
  // const[Email,setEmail]=useState('');
  // const[password,setPassword]=useState('');
  
  // const saveData = ()=> {
   // console.log(name+" "+password+" "+conPassword);
  
    // fetch('https://localhost:4000/User', {
    //           method: 'POST',
    //           body: JSON.stringify({
    //               name: name,
    //               Address: Address,
    //               Contact: Contact,
    //               Email: Email,
    //               password: password
    //           }),
    //           headers: {
    //               'Content-type': 'application/json; charset=UTF-8',
    //           },
    //       })
    //           .then((response) => {Alert.alert("User Registered Successfully !")})
    //           .catch((err)=>{Alert.alert("Error occured !")})
  
     const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[conPassword,setConPassword]=useState('');

const saveData = ()=> {
  //console.log(name+" "+password+" "+conPassword);

  fetch('https://localhost:4000/user', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                conPassword: conPassword
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => {Alert.alert("User Registered Successfully !")})
            .catch((err)=>{Alert.alert("Error occured !")})
}   

return(
    <NativeBaseProvider style={style.pannel}>
       
         <Text style={style.text}></Text>
          <Stack  space={4} w="75%" maxW="300px" mx="auto" style={style.txtContainer}>
          <Input variant="rounded" placeholder=" name" onChangeText={(e)=> {setName(e)}} />
          <Input variant="rounded" placeholder="Address" onChangeText={(e)=> {setAddress(e)}} />
        <Input variant="rounded" placeholder="Contact"onChangeText={(e)=> {setContact(e)}} />
        <Input variant="rounded" placeholder="Email"onChangeText={(e)=> {setEmail(e)}} />
        <Input variant="rounded" placeholder="password"onChangeText={(e)=> {setPassword(e)}} />


        
       
      
      </Stack>  

      <Image
         style={{height:100, width:100,position:"absolute",top:30,left:145,right:100, backgroundColor: 'red',}} source={require('../assets/33-338711_circle-user-icon-blue-hd-png-download.png')}  />
{/*      
      <TouchableOpacity
    // onPress={saveData}
  
  style={{
    backgroundColor: 'blue',
    padding: 1,
    borderRadius: 800,
    marginBottom: 50,
    width:100,
   top:605,
   right:4,
   left:148,
   margin:0,
   position:'absolute',
   
  }}


>
 
  <Text
    style={{
      textAlign: 'center',
      fontWeight: '10',
      fontSize: 15,
      color: 'white',
       }}>
     
   Register
  </Text>
</TouchableOpacity> } */}
<Button Text="Submit" 
/>

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
      }

   
    

});

 