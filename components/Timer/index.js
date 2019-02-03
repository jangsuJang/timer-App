import { connect } from 'react-redux';
//state뿐 아니라 액션도 복사할 수 있으면 좋을것임 
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer'
import Timer from './presenter';
//스토어에서 state를 복사해서 컨테이너의 props에 붙여넣음
//현재 state를 provider store에서 불러온다 
//App.js에서 <Provider store={store}> 라고 작성하였음
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

//디스패치는 액션을 리듀서로 보내는 function임.
function mapDispatchToProps(dispatch){
    return {
        //각 액션을 디스패치와 묶음
        startTimer: bindActionCreators(tomatoActions.startTimer,dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer,dispatch)
    };

}

//connect mapstatetoProps to Timer
//기존 스테이트와 함꼐 디스페치도 함께 연결
export default connect(mapStateToProps,mapDispatchToProps)(Timer);