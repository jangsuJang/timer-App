import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//우리가 만들었던 컴포넌트를 임포트
//각 컴포넌트 폴더 안에 index가 있음 node.js가 디폴트로 폴더 안에 인덱스를 찾을 수 있음
import Timer from './components/Timer';

export default class App extends React.Component {
  render() {
    return <Timer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
