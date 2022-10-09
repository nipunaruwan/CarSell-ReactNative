import React from "react";
import { View ,Text,Image,StyleSheet,ImageBackground,Button,TouchableOpacity } from "react-native";
import Loader from "../Component/Loader";

const image = { uri: "../assets/png-image-54.png" };
const localimage =require("../assets/png-image-54.png")
export default function Home({navigation}){
return(
    <View style={styles.container}>
    <ImageBackground source={localimage} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>W  e  l  c  o  m   e</Text>
    </ImageBackground>

   <Loader  />

   <TouchableOpacity
  onPress={()=>{navigation.navigate("Login")}}
      style={{
        backgroundColor: 'blue',
        padding: 1,
        borderRadius: 800,
        marginBottom: 50,
        width:100,
       top:560,
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
         
       Next
      </Text>
    </TouchableOpacity>

  </View>
);

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 6,
width:400,
      justifyContent: "center",
      backgroundColor:"red"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0"
    }
  });

  