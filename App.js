import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Header } from './src/components/Header'
import { TapBar } from './src/components/TapBar'
import { Screen2 } from './src/screens/Screen2'
import { Screen1 } from './src/screens/Screen1'
import { Screen3 } from './src/screens/Screen3'


const screenTitles = ['Contacts', 'Log In', 'Gallery']

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1)


  return (
    <View style={[styles.root, { backgroundColor: activeScreen === 3 ? 'black' : 'white' }]}>
      <Header titlesArray={screenTitles} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      {activeScreen === 1 && <Screen1 />}
      {activeScreen === 2 && <Screen2 setActiveScreen={setActiveScreen} />}
      {activeScreen === 3 && <Screen3 />}
      {activeScreen === 1 ? <TapBar setActiveScreen={setActiveScreen} /> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1
  },
  scrollContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    paddingHorizontal: 25,
    flex: 1
  },
  inputStyle: {
    width: '100%',
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 30,
    borderRadius: 20,
    fontSize: 18
  },
  indicatorStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

})

export default App