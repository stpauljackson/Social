import { View, Text,StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
        <View><Ionicons name='camera' size={30} color="black" /></View>
        <View style={styles.textbox}>
            <Text style={styles.text}>Explore</Text>
        </View>
        <View><Ionicons name='notifications' size={30} color="black" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10
    },
    textbox:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:23,
        color:'black'
    }
})