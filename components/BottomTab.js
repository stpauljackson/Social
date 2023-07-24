import React from 'react';
import {View, StyleSheet, ImageBackground, StatusBar, TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Svg width="100%" height="100%" viewBox="0 0 24 3" fill="royalblue">
        <Path d="M7 0 C10 0 9 3 12 3 C15 3 14 0 17 0 L24 0 L24 5 L0 5 L0 0 L7 0" />
      </Svg>
      <View style={styles.iconContainer}>
        <View style={styles.iconSubContainer}>
          <Ionicons name="home" size={30} color="white" />
          <Ionicons name="chatbubble-ellipses" size={30} color="white" />
        </View>
        <View style={styles.iconSubContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
          <Ionicons name="person" size={30} color="white" />
          </TouchableOpacity>
          <Ionicons name="notifications" size={30} color="white" />
          
        </View>
        <View style={styles.circleContainer}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Video')}}>
            <View style={styles.circle}>
              <Ionicons name="add" size={40} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: 100,
    padding: 0,
    margin: 0,
  },
  iconContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
  },
  iconSubContainer: {
    flexDirection: 'row',
    width: '40%',
    justifyContent: 'space-around',
  },
  circleContainer: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'start',
    alignItems: 'center',
    top: 0,
  },
  circle: {
    padding: 'auto',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  blur: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
