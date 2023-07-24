import { View,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileHeader({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}><Ionicons name='arrow-back-outline' size={30} color="white" /></TouchableOpacity>
        <View><Ionicons name='mail-outline' size={30} color="white" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingVertical:10,
        height:50,
        zIndex:20
    }
})