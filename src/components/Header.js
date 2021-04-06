import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ButtonCircle } from './ButtonCircle'

export const Header = ({ titlesArray, activeScreen, setActiveScreen }) => (
  <View style={styles.root}>
    {activeScreen === 2 && <ButtonCircle onPress={setActiveScreen} />}
    <Text style={[styles.headerText, { color: activeScreen === 3 ? 'white' : 'black' }]}>
      {titlesArray[activeScreen - 1]}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  root: {
    paddingTop: 50,
    marginBottom: 10,
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 36,
    fontWeight: '100'
  },
  ButtonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#0A0A0A',
    borderRadius: 20
  }
})