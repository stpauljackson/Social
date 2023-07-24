import React, { useEffect, useState } from 'react';
import { View, StyleSheet,StatusBar, FlatList, ScrollView } from 'react-native';
import Header from '../components/HomeHeader';
import BottomTab from '../components/BottomTab'
import Story from '../components/Story';

import p1 from '../person1.jpg'
import p2 from '../person2.jpg'
import img1 from '../img1.jpg'
import img2 from '../img2.jpg'
import Card from '../components/Card';
import { useSelector } from 'react-redux';


const Home = ({navigation}) => {
  const d = useSelector(state =>state.VideoReducer.list)
  const [data , setData] = useState([])
  useEffect(()=>{
    const x = d.sort((a,b)=>{
      if(a.video === null) return 1
      return -1
    })
    setData(x)
  },[d])
  return (
    <View style={styles.container}>
        <Header />
        <ScrollView  showsHorizontalScrollIndicator={false}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
        data={data}
        renderItem={({ item }) => <Story item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
      </ScrollView>
      <FlatList
        data={data}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
      </ScrollView>
        <BottomTab navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
    paddingTop:StatusBar.currentHeight+5
  },
  
  flatListContent: {
    paddingHorizontal: 20,
    paddingVertical:13,
    flex:1
  },
});

export default Home;
