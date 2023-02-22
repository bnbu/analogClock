import { connect } from 'react-redux';
import './App.css';
import * as timeAction from '../action/time'

function App(props) {
    const { storeHour, storeMinute, storeSecond, storeReset } = props;
    return (
        <div>
            <div>
            {storeHour}:{storeMinute}:{storeSecond}
            </div>
            <button onClick={storeReset}>
                리셋
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    storeHour: state.time.hour,
    storeMinute: state.time.minute,
    storeSecond: state.time.second
})

const mapDispatchToProps = (dispatch) => ({
    storeSetHour: (hour) => dispatch(timeAction.setHour(hour)),
    storeSetMinute: (minute) => dispatch(timeAction.setMinute(minute)),
    storeSetSecond: (second) => dispatch(timeAction.setSecond(second)),
    storeIncreaseHour: () => dispatch(timeAction.increaseHour()),
    storeIncreaseMinute: () => dispatch(timeAction.increaseMinute()),
    storeIncreaseSecond: () => dispatch(timeAction.increaseSecond()),
    storeReset: () => dispatch(timeAction.reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);