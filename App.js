import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//우리가 만들었던 컴포넌트를 임포트
//각 컴포넌트 폴더 안에 index가 있음 node.js가 디폴트로 폴더 안에 인덱스를 찾을 수 있음
import Timer from './components/Timer';
//리듀서가 exported된 후에 스토어를 생성
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


let store = createStore(reducer);

//getState를 통하여 지금 상태를 볼수 있음
//console.log(store.getState());

export default class App extends React.Component {
  render() {
    //Provider의 역할은 컴포넌트 안의 스토어를 복사해서 자식컴포넌트에 넣는 역할을 한다
    //타이머를 연결헤서, 타치머가 진행중인지 아닌지(isPlaying)을 알아야함
    return(
      //프로바이더는 스토어라는 하나의 프로퍼티를 가진다.
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}