import React, {useState} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import {UserCard} from './src/components/UserCard'
import {Header} from './src/components/Header'
import {TapBar} from './src/components/TapBar'
import {Screen2} from './src/screens/Screen2'
import {DATA} from './src/DATA'


const screenTitles = ['Contacts', 'Log In']

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1)
  return (
    <View style={styles.root}>
      <Header titlesArray={screenTitles} activeScreen={activeScreen} setActiveScreen={setActiveScreen} /> {activeScreen === 1 ? (
    <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
      {DATA.map(item => ( 
        <UserCard
          userName={item.userName}
          userPhone={item.userPhone}
          userPic={item.userPic}
          userAddress={item.addressDescription}
          userMail={item.emailDescription}
        />
      ))}
    </ScrollView>
      ) : (
        <Screen2 />
      )}
      <TapBar setActiveScreen={setActiveScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
  },
  scrollContainer: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    paddingHorizontal: 25,
    flex: 1,
  },
  inputStyle: {
    width: '100%',
    height: 55,
    margin: 12,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    paddingLeft: 30,
    borderRadius: 20,
    fontSize: 18,
  },

});

export default App;