import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { UserCard } from '../components/UserCard'
import { DATA } from '../DATA'

export const Screen1 = () => {
    return (
      <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
        {DATA.map((item) => (
          <UserCard
            userName={item.userName}
            userPhone={item.userPhone}
            userPic={item.userPic}
            userAddress={item.addressDescription}
            userMail={item.emailDescription}
          />
        ))}
      </ScrollView>
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
    }
})