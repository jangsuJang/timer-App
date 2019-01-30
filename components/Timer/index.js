import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

//StatusBar을 사용해서 아이폰위의 상태표시바를 어떻게 처리할지를 정할수 있음

class Timer extends Component{
    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle" onPress={() => alert('it works')}/>
                    <Button iconName="stop-circle" onPress={() => alert('it works')}/>
                </View>
            </View>
        );
    }
}

//스타일을 적용하여 레이아웃을 짠다
const styles = StyleSheet.create({
    container: {
        //각 flex는 해당 뷰안에서의 비율을 의미한다
        flex: 1,
        backgroundColor: "#CE0B24" //컨테이너의 배경을 빨간색으로 칠함
    },
    upper: {
        flex: 2,
//        flexDirection: "column",
        justifyContent: "center" , //가로 축으로 가운데 정렬
        alignItems: "center" //justifyContent의 반대축 정렬 (무엇이 가로축이고 세로축인지는 flex-direction에 따라다름
    },
    lower:  {
        flex: 1,
//        flexDirection: "column",
        justifyContent: "center",//가로 축으로 가운데 정렬
        alignItems: "center" //justifyContent의 반대축 정렬 (무엇이 가로축이고 세로축인지는 flex-direction에 따라다름
    },
    time: {
        //폰트컬러
        color:"white",
        //폰트 크기
        fontSize:120,
        //폰트 두께
        fontWeight: "100"
    },
});

//App.js에서 임포트를 하기위한 엑스포트
export default Timer;
