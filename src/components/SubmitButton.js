import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const screenStrings = ['SubmitButton']

export const SubmitButton = ({ setActiveScreen }) => (
  <View style={styles.root}>
    {screenStrings.map((item, index) => (
      <TouchableOpacity style={styles.submitStyle} onPress={() => setActiveScreen(index + 1)}>
        <Text style={styles.headerText}>{item.toUpperCase()}</Text>
      </TouchableOpacity>
        ))}
  </View>
)

const styles = StyleSheet.create({
    root: {
        marginBottom: 10,
        backgroundColor: '#0A0A0A',
        borderRadius: 200,
        width: '70%',
        height: 50,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize:13,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    submitStyle: {
        flex: 1
    }
})