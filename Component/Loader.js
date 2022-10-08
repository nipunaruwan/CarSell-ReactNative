import { View, Text } from 'react-native'
import React from 'react'
import { Button, Stack, Center, NativeBaseProvider } from "native-base";

const Loader=()=>{
  return <Stack direction={{
    base: "column",
    md: "row"
  }} space={2} alignItems={{
    base: "center",
    md: "flex-start"
  }}>
     
     
      <Button isLoading spinnerPlacement="end" isLoadingText="Get start">
     
      </Button>
     
      
    </Stack>;
};

  
export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Loader/>
        </Center>
      </NativeBaseProvider>
    );
};