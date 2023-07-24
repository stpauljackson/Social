import { View, Text ,Image, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

export default function Story({item}) {
  return (
    <TouchableOpacity style={styles.circularStoryItem}>
    <View style={styles.circularStoryImageWrapper}>
      <Image source={item.image} style={styles.circularStoryImage} />
    </View>
    <Text style={styles.circularStoryName}>{item.name}</Text>
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  circularStoryItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  circularStoryImageWrapper: {
    borderWidth: 2,
    borderColor: 'royalblue',
    borderRadius: 50,
    padding: 2,
  },
  circularStoryImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  circularStoryName: {
    marginTop: 4,
    fontWeight:'bold',
    color:'black'
  },
})