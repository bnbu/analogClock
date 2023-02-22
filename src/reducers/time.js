import * as timeAction from '../action/time';

const initState = {
    hour: 0,
    minute: 0,
    second: 0
}

const reducers = (state = initState, action) => {
    switch (action.type) {
        case timeAction.SET_HOUR: {
            return {
                ...state,
                hour: action.hour
            }
        }
        case timeAction.SET_MINUTE: {
            return {
                ...state,
                minute: action.minute
            }
        }
        case timeAction.SET_SECOND: {
            return {
                ...state,
                second: action.second
            }
        }
        case timeAction.INCREASE_HOUR: {
            return {
                ...state,
                hour: state.hour + 1
            }
        }
        case timeAction.INCREASE_MINUTE: {
            return {
                ...state,
                minute: state.minute + 1
            }
        }
        case timeAction.INCREASE_SECOND: {
            return {
                ...state,
                second: state.second + 1
            }
        }
        case timeAction.RESET: {
            let date = new Date(Date.now());
            return {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }
        }
        default: {
            return state;
        }
    }
}

export default reducers;