import React, { useState } from 'react'
import { ScrollView, StyleSheet, TextInput } from 'react-native'

export const Screen2 = () => {
    const [valueLogin, setValueLogin] = useState ('')
    const [valuePassword, setValuePassword] = useState ('')
    return (
      <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
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
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollStyle: {
        flex: 1
    },
    scrollContainer: {
paddingTop:250,
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
    }
})