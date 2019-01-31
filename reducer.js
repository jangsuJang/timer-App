//Import 

//Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//Action Creators
function startTime(){
    return {
        type: START_TIMER
    };
}

function restartTimer(){
    return{
        type : RESTART_TIMER
    };
}

function addSecond(){
    return{
        type: ADD_SECOND
    };
}

//Reducer
const TIME_DURATION = 1500;
const initialState = {
    isPlaying: false,
    elapsedTime:0,
    timerDuration: TIME_DURATIO
}

//기본으로 state를 지 않으면 기본값으로 initial state로 시작
//액션을 보낼때 마다 리덕스는 기본으로 리듀서를 실행함
function reducer(state = initialState, action){
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        
    }
}

//Reducer Functions
function applyStartTimer(state){
    return{
        //...state는 나머지는 변경하지 않는다??
        ...state,
        isPlaying:true
    }
}

function applyRestartTimer(state){
    return{
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}

function applyAddSecond(state){
    if(state.elapsedTime < TIME_DURATION ){
        return{
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    }
    else{
        return{
            ...state,
            isPlaying: false
        };
    }
}

//Export Action Creators

const actionCreators = {
    startTime, 
    restartTimer,
    addSecond
}

//Export Reducer

export default reducer;