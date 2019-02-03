// Imports

// Actions

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";

// Action Creators

function startTimer() {
  return {
    type: START_TIMER
  };
}

//presenter.js에서 이함수를 호출하면 액션의 타입을 변경  (action.type)
//그리고 이는 리듀서 안에서 작용을함 (function reducer)
function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECOND
  };
}

// Reducer

const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state, action);
    case RESTART_TIMER:
      //RestartTimer가 감지되면 이는  transformation을 적용 (applyRestartTimer)
      return applyRestartTimer(state, action);
    case ADD_SECOND:
      return applyAddSecond(state, action);
    default:
      return state;
  }
}

// Reducer Functions

function applyStartTimer(state, action) {
  return {
    ...state,
    isPlaying: true,
    elapsedTime: 0
  };
}

function applyRestartTimer(state, action) {
  return {
    ...state,//이전 state를 불러옴
    isPlaying: false,
    elapsedTime: 0
  };
}

function applyAddSecond(state, action) {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaying: false
    };
  }
}

// Exports

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};
export { actionCreators };

// Default

export default reducer;