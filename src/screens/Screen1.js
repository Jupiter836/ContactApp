import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { UserCard } from '../components/UserCard'
//import { DATA } from '../DATA'

export const Screen1 = ({ data }) => {
   // console.log(data)
    return (
      <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <UserCard
            userName={item.username}
            userPhone={item.phone}
            userPic={item.userPic}
            userAddress={item.address.zipcode}
            userMail={item.email}
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