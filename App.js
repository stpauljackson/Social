import * as React from 'react';
import {StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';

import Home from './screen/Home.js'
import Profile from './screen/Profile.js';
import Video from './components/Video.js'
import store from './components/store.js';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent"  barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="Profile" component={Profile} />
        <Stack.Screen name='Video' component={Video} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
