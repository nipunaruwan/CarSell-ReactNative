import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button(props) {
  return (
    <TouchableOpacity
  
  
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
         
        {props.Text}
      </Text>
    </TouchableOpacity>
  )
}