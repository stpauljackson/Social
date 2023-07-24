import { combineReducers,createStore } from "redux";

import p1 from '../person1.jpg'
import p2 from '../person2.jpg'
import img1 from '../img1.jpg'
import img2 from '../img2.jpg'

const initialState = {
  list:[
  { video:null,background:img1,id: '59', name: 'Jorge', image: p1 },
  { video:null,background:img2,id: '3', name: 'Alexander', image: p2 },
  { video:null,background:img1,id: '87', name: 'Herbert', image: p1 },
  { video:null,background:img2,id: '71', name: 'Ruth', image: p2 },
  { video:null,background:img1,id: '92', name: 'Eleanor', image: p1 },
  { video:null,background:img2,id: '19', name: 'Ernest', image: p2 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VIDEO':
      console.log('video added')
      return {
        ...state,
        list:[...state.list,action.data]
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
    VideoReducer: reducer,
});

export default store = createStore(rootReducer);