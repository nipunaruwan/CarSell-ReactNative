import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button(label) {
  return (
    <TouchableOpacity
    onPress={() => {}}
      style={{
        backgroundColor: 'blue',
        padding: 1,
        borderRadius: 800,
        marginBottom: 50,
        width:100,
       top:650,
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
    </TouchableOpacity>
  )
}