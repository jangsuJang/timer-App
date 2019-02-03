import { connect } from 'react-redux';
import Timer from './presenter';

//스토어에서 state를 복사해서 컨테이너의 props에 붙여넣음
function mapStateToProps(state){
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

//connect mapstatetoProps to Timer
export default connect(mapStateToProps)(Timer);