import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import arrowIcon from '../assets/images/arrow.png'

export const ButtonCircle = ({ onPress }) => (
  <TouchableOpacity style={styles.buttonCircle} onPress={() => onPress (1)}>
    <Image style={styles.iconStyle} source={arrowIcon} />
  </TouchableOpacity>
)
const styles = StyleSheet.create ({
    buttonCircle: {
        width:40,
        height:40,
        backgroundColor: '#0A0A0A',
        borderRadius: 20,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        height: 20,
        width: 15
    }
})