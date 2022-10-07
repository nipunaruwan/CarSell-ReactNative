import React from "react";
import { View,Text, StyleSheet} from "react-native";
import { NativeBaseProvider, Box, Stack, Input, Center, Image,Icon,MaterialIcons,Pressable } from "native-base";




function Logintxt() {
    const [show, setShow] = React.useState(false);
    return <Stack space={4} w="100%" alignItems="center">
        <Input w={{
        base: "75%",
        md: "25%"
      }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
        <Input w={{
        base: "75%",
        md: "25%"
      }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Password" />
      </Stack>;
  };

  export default Logintxt 
   
    
