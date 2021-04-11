import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import { UserCard } from '../components/UserCard'
//import { DATA } from '../DATA'

const urlUser = 'https://jsonplaceholder.typicode.com/users'

export const Screen1 = () => {
    /* console.log(dataUser) */

    const [isLoading, setLoading] = useState (true)
    const [dataUser, setDataUser] = useState ([])
    const [refresh, setRefresh] = useState(false)
  
    console.log(':::', dataUser)
  
    useEffect(() => {
       asyncHandler ()
    }, [refresh])
  
  const asyncHandler = async () => {
    try {
      const response = await fetch(urlUser)
      const users = await response.json()
      setDataUser(users)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      alertHandler(error)
    }
  }
  
    const alertHandler = (error) =>
      Alert.alert(
        `${error}`,
        'Repeat the request?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel'),
            style: 'cancel'
          },
          { text: 'OK', onPress: () => setRefresh(!refresh) }
        ],
        { cancelable: false }
      )

      if (isLoading) {
        return <ActivityIndicator style={styles.indicatorStyle} size="large" color="black" />
      } 
    
    return (
      <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
        {dataUser.map((item) => (
          <UserCard
            userName={item.username}
            userPhone={item.phone}
            userPic={item.userPic}
            userAddress={item?.address?.zipcode}
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