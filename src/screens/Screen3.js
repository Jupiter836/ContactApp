import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { GalleryCard } from '../components/GalleryCard'

export const Screen3 = ({ data }) => {
  // console.log(data)
   return (
     <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
       {data.map((item) => (
         <GalleryCard
           galleryName={item.username}
           galleryNumber={item.phone}
           galleyPhot={item.userPic}
           userAddress={item.address.zipcode}
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