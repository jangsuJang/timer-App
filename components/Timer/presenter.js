import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time){
    let minutes = Math.floor(time/60);
    time -= minutes * 60
    let seconds = parseInt(time % 60 , 10);
    return `${minutes<10 ? `0${minutes}`: minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

//StatusBar을 사용해서 아이폰위의 상태표시바를 어떻게 처리할지를 정할수 있음
class Timer extends Component{

    //componentWillReceiveProps는 새로운 porps를 얻을때마다 자동으로 호출된다.
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
//        console.log(`the current props are: ${ currentProps.isPlaying } and the new ones are ${nextProps.isPlaying}`);
        if(!currentProps.isPlaying && nextProps.isPlaying){
            //start the interval
            console.log("should start");
            const timeInterval = setInterval(
                ()=>{currentProps.addSecond();},
                1000,
            );
            //save timeInterval in state
            this.setState({
                timeInterval
            });
        }
        else if(currentProps.isPlaying && !nextProps.isPlaying){
            //stop the interval
            console.log("should end");

            //load timeInterval in the state
            clearInterval(this.state.timeInterval);

        }
    }

    render(){
        //로그 출력을 통하여 컴포넌트가 props를 가진다는것을 확인할수 있음 누군가가 준것이 아니라 App.js에서 인자로 넘겨준것이 아니라
        //리덕스 스토어에서 얻은것임)
        //디스패치도 넘겨준후에는 this.props에 restartTimer와 startTimer도 추가된걸 확인할수 있음 그리고 이두 함수도 사용할수 있음
        console.log(this.props)
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer,
            addSecond,
        } = this.props
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {/* 전체시간에서 경과시간을 빼서 보여줌. */}
                        {formatTime(timerDuration-elapsedTime)}
                        {/* {timerDuration - elapsedTime}  */}
                    </Text>
                </View>
                <View style={styles.lower}>
                    {           
                        // play버튼은 플레이중이지 않을떄만 나타나야만 한다
                        !isPlaying ? (
//                            <Button iconName="play-circle" onPress={() => alert('it works')}/>
                            <Button iconName="play-circle" onPress={startTimer}/>
                        ) : null
                    } 
                    {
                        isPlaying && (
                            <Button iconName="stop-circle" onPress={restartTimer}/>
                        )
                    }
                    
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
