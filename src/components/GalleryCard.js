import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Waterfall from '../assets/images/Waterfall.png'

const GalleryBlock = ({ title }) => {
  return (
    <>
      <View style={styles.root}>
        <View style={styles.cardStyle}>
          <Image style={styles.iconStyle} source={Waterfall} />
          <Text style={styles.galleryStyle}>{title}</Text>
        </View>
      </View>
    </>
)
}
export const CardGallery = ({
    galleryName,
    galleryNumber,
    galleryPhoto
  }) => {
    return (
      <>
        <View style={styles.mainBox}>
          <View style={styles.styleIco}>
            <Image style={styles.iconStyle} source={Waterfall} />
          </View>
        </View>
        <View style={styles.hiddenBox}>
          <GalleryBlock title="NAME" description={galleryName} />
          <GalleryBlock title="NUMBER" description={galleryNumber} />
          <GalleryBlock title="PHOTO" description={galleryPhoto} />
        </View>
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