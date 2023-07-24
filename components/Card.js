import {View, Text, StyleSheet, Image,} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

export default function Card({item}) {
  return (
    <View style={styles.card}>
      <View style={styles.Header}>
        <View style={styles.circularStoryImageWrapper}>
          <Image source={item.image} style={styles.circularStoryImage} />
        </View>
        <View style={{justifyContent: 'center', paddingHorizontal: 10}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.tag}>@{item.name}</Text>
        </View>
      </View>
        <View style={{height: '80%', borderRadius:30,backgroundColor:'black',overflow:'hidden'}}>
          {
            item.background?<Image source={item.background} style={{height:'100%',width:'100%',borderRadius:30,zIndex:1}} />:
            <Video
            source={item.video}
            style={{ flex: 1 }}
            resizeMode="contain"
          />
          }
          
          
          <View style={styles.innerView}>
            <View style={{flexDirection:'row',width:'40%',justifyContent:'space-evenly'}}>
            <Ionicons name="ellipsis-horizontal" size={25} color="white" />
            <Ionicons name="heart" size={25} color="white" />
            </View>
            <View style={{flexDirection:'row',width:'40%',justifyContent:'space-evenly'}}>
            <Ionicons name="send-outline" size={25} color="white" />
            <Ionicons name="bookmark" size={25} color="white" />
            </View>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 350,
    backgroundColor: '#E6EEFA',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    justifyContent: 'space-evenly',
  },
  Header: {
    flexDirection: 'row',
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
  tag: {
    fontWeight: '500',
  },
  innerView: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:'17%',
    width:'100%',
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  circularStoryImageWrapper: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 32,
    padding: 2,
    height: 40,
    width: 40,
  },
  circularStoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  circularStoryName: {
    marginTop: 4,
    fontWeight: 'bold',
    color: 'black',
  },
});
