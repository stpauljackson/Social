import {View, Text, StyleSheet, StatusBar,ImageBackground, ScrollView, Image} from 'react-native';
import React from 'react';

import ProfileHeader from '../components/ProfileHeader';
import b1 from '../colorMix.png'
import ProfileCard from '../components/ProfileCard';

export default function Profile({navigation}) {
  return (
    <ScrollView style={{height:'100%'}}>
    <Image source={b1} style={styles.backgroundImage} />
      <View style={styles.container}>
        <ProfileHeader navigation={navigation} />
      </View>
      <ProfileCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight + 5,
    height:'100%'
  },
  backgroundImage: { 
    width:'100%',
    position:'absolute'
  },
});
