export const SET_HOUR = 'user/SET_HOUR';
export const SET_MINUTE = 'user/SET_MINUTE';
export const SET_SECOND = 'user/SET_SECOND';

export const INCREASE_HOUR = 'user/INCREASE_HOUR';
export const INCREASE_MINUTE = 'user/INCREASE_MINUTE';
export const INCREASE_SECOND = 'user/INCREASE_SECOND';

export const RESET = 'user/RESET';

export const setHour = (hour) => {
    return {
        type: SET_HOUR,
        hour: hour
    }   
}

export const setMinute = (minute) => {
    return {
        type: SET_MINUTE,
        minute: minute
    }
}

export const setSecond = (second) => {
    return {
        type: SET_SECOND,
        second: second
    }
}

export const increaseHour = () => {
    return {
        type: INCREASE_HOUR
    }
}

export const increaseMinute = () => {
    return {
        type: INCREASE_MINUTE
    }
}

export const increaseSecond = () => {
    return {
        type: INCREASE_SECOND
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}