import React from 'react'
import { ScrollView, StyleSheet, Image, Text, View } from 'react-native'
import Waterfall from '../assets/images/Waterfall.png'

const GalleryBlock = () => {
    return (
      <>
        <View style={styles.root}>
          <View style={styles.cardStyle}>
            <Image style={styles.iconStyle} source={Waterfall} />
            <Text style={styles.galleryStyle}>Official photo for album</Text>
          </View>
        </View>
      </>
  )
}

export const Screen3 = () => {
    return (
      <>
        <ScrollView style={styles.scrollStyle} contentContainerStyle={styles.scrollContainer}>
          <GalleryBlock />
          <GalleryBlock />
          <GalleryBlock />
          <GalleryBlock />
          <GalleryBlock />
          <GalleryBlock />
          <GalleryBlock />
          <GalleryBlock />
        </ScrollView>
      </>
    )
}

const styles = StyleSheet.create({
    scrollStyle: {
        
        
        
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