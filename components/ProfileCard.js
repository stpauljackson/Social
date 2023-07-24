import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import img1 from '../img1.jpg';
import p1 from '../person1.jpg';

export default function ProfileCard() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.circularStoryImageWrapper}>
          <Image source={p1} style={styles.circularStoryImage} />
        </View>
        <View style={styles.follow}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>10K</Text>
            <Text style={{color: 'black'}}>Followers</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>135</Text>
            <Text style={{color: 'black'}}>Following</Text>
          </View>
        </View>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: 19,
            alignSelf: 'center',
            marginTop: 3,
          }}>
          @tashmat13
        </Text>
        <Text
          style={{
            fontSize: 13,
            alignSelf: 'center',
            marginTop: 5,
            textAlign: 'center',
          }}>
          My name is Tashmat , I like photography and travelling all around the
          world
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View style={{...styles.button, backgroundColor: 'royalblue'}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Follow</Text>
          </View>
          <View style={{...styles.button, backgroundColor: 'white'}}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>Message</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'transparent',
          marginTop: -50,
          borderRadius: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}>
          <Text
            style={{marginHorizontal: 20, color: 'black', fontWeight: 'bold'}}>
            All
          </Text>
          <Text
            style={{marginHorizontal: 20, color: 'black', fontWeight: 'bold'}}>
            Photos
          </Text>
          <Text
            style={{marginHorizontal: 20, color: 'black', fontWeight: 'bold'}}>
            Videos
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            borderRadius: 50,
            padding: 3,
            overflow: 'hidden',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: '99%',
              width: '98%',
              borderRadius: 50,
              overflow: 'hidden',
            }}>
            <View
              style={{flexDirection: 'row', marginLeft: -8, marginBottom: 8}}>
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: -8, marginBottom: 8}}>
              <Image style={styles.image} source={img1} />
              <Image style={styles.image} source={img1} />
              <Image style={styles.image} source={img1} />
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: -8, marginBottom: 8}}>
              <Image style={styles.image} source={img1} />
              <Image style={styles.image} source={img1} />
              <Image style={styles.image} source={img1} />
            </View>
            <View
              style={{flexDirection: 'row', marginLeft: -8, marginBottom: 8}}>
              <Image style={styles.image} source={img1} />
              <Image style={styles.image} source={img1} />
              <Image style={styles.image} source={img1} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
    aspectRatio: 3 / 4,
    marginHorizontal: 8,
  },
  button: {
    marginHorizontal: 20,
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 7,
    marginBottom: 100,
  },
  container: {
    width: '100%',
    flex: 1,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#E6EEFA',
    position: 'relative',
  },
  follow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circularStoryImageWrapper: {
    marginTop: -50,
    borderWidth: 6,
    borderColor: 'white',
    borderRadius: 60,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  circularStoryImage: {
    width: 110,
    height: 110,
    borderRadius: 60,
  },
});
