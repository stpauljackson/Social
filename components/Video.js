import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useDispatch } from 'react-redux';

import p1 from '../person1.jpg'

const RecordingComponent = ({navigation}) => {
    const cameraRef = useRef(null);
    const [started, setstarted] = useState(false)
    const dispatch = useDispatch();
    const recordAsync = async () => {
      if (cameraRef.current) {
        try {
          const data = await cameraRef.current.recordAsync();
          console.log('Video recorded:', data);
          dispatch({type:'ADD_VIDEO',data:{name:'You',id:Math.random()*1000,video:data,background:null,image:p1}})
        } catch (error) {
          console.log('Error recording video:', error);
        }
      }
    };
  
    const stopRecording = async () => {
      if (cameraRef.current) {
        cameraRef.current.stopRecording();
      }
    };

    const handleclick = ()=>{
      if(started)
      {
        stopRecording()
        setstarted(false)
        navigation.goBack()
        return;
      }
      else
      {
        recordAsync();
        setstarted(true)
      }  
    }
  
    return (
      <View style={{ flex: 1 }}>
        <RNCamera
          ref={cameraRef}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
        />
        <TouchableOpacity style={{alignSelf:'center',height:30,justifyContent:'center'}} onPress={handleclick}>
          <Text style={{color:'black',fontWeight:'bold',fontSize:15}}>{started?'Stop':'Start'}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default RecordingComponent;
  