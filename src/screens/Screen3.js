import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Alert, ActivityIndicator  } from 'react-native'
import { GalleryCard } from '../components/GalleryCard'
//import { DATA } from '../DATA'

const urlGallery ='https://jsonplaceholder.typicode.com/photos?_limit=30'

export const Screen3 = () => {

  const [isLoading, setLoading] = useState (true)
  const [dataGallery, setDataGallery] = useState ([])
  const [refresh, setRefresh] = useState(false)

  console.log(':::', dataGallery)

  useEffect (() =>{
    asyncHandlerGallery ()
 }, [refresh])

const asyncHandlerGallery = async () => {
 try {
   const response = await fetch(urlGallery)
   const gallery = await response.json()
   setDataGallery(gallery)
   setLoading(false)
 } catch (error) {
   setLoading(false)
   alertHandlerGallery(error)
 }
}

 const alertHandlerGallery = (error) =>
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
     <>
       <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
         {dataGallery.map((item) => (
           <GalleryCard
             galleryName={item.title}
             galleryNumber={item.albumId}
             galleryPhoto={{ uri:item.urlGallery }}
           />
       ))}
       </ScrollView>
     </>
   )
}

const styles = StyleSheet.create({
    scrollStyle: {
    flex: 1
    },
    
    scrollContainer: {
    paddingTop:37,
    alignItems: 'center',
    justifyContent: 'center'

    },
    cardStyle: {
        width: 363,
        height: 172,
        backgroundColor: '#0A0A0A',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#444444',
        marginBottom: 20
      
    },
   iconStyle: {
       width: 339,
       height: 118,
       borderRadius: 5,
       marginTop: 13,
       marginLeft: 12
   },
   galleryStyle:{
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 14,
    marginLeft: 12,
    borderColor: '#444444'
   }
  })