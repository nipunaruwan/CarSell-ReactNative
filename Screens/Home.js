import React from "react";
import { View ,Text,Image,StyleSheet,ImageBackground,Button } from "react-native";
import Loader from "../Component/Loader";

const image = { uri: "../assets/png-image-54.png" };
const localimage =require("../assets/png-image-54.png")
export default function Home(){
return(
    <View style={styles.container}>
    <ImageBackground source={localimage} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>W  e  l  c  o  m   e</Text>
    </ImageBackground>

   <Loader/>

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
      justifyContent: "center"
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

  