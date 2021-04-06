import React, { useState } from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native'

export const Screen2 = ({ setActiveScreen }) => {
    const [valueLogin, setValueLogin] = useState ('')
    const [valuePassword, setValuePassword] = useState ('')
    return (
      <View style={styles.root}>
        <TextInput 
          style={styles.inputStyle}
          placeholder="Enter your Login"
          value={valueLogin}
          onChangeText={setValueLogin}
        />
        <TextInput 
          style={styles.inputStyle}
          placeholder="Enter your Password"
          value={valuePassword}
          onChangeText={setValuePassword}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => setActiveScreen(3)}>
          <Text style={styles.submitText}> Submit </Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    root: {
paddingTop:150,
alignItems: 'center',
justifyContent: 'center'
    },
    inputStyle: {
        width: '100%',
        height:55,
        margin:12,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        paddingLeft: 30,
        borderRadius: 20,
        fontSize: 18
    },
  buttonStyle: {
    marginTop: 200,
    borderRadius: 20,
    width: 265,
    height: 51,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ADD3'
},
submitText: {
    fontSize: 16,
    color: '#FFFFFF'
}
})