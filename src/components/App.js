import { connect } from 'react-redux';
import './App.css';
import * as timeAction from '../action/time'
import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        const tick = () => {
            savedCallback.current();
        }

        const timerId = setInterval(tick, delay);
        return () => clearInterval(timerId);
    }, [delay]);
}

function App(props) {
    const { storeHour, storeMinute, storeSecond, storeReset, storeSetHour, storeSetMinute, storeSetSecond, storeIncreaseHour, storeIncreaseMinute, storeIncreaseSecond } = props;
    let setTimer = () => {
        if (storeSecond < 59) storeIncreaseSecond();
        else {
            storeSetSecond(0);
            if (storeMinute < 59) storeIncreaseMinute();
            else {
                storeSetMinute(0);
                if (storeHour < 23) storeIncreaseHour();
                else storeSetHour(0);
            }
        }
    }

    useInterval(setTimer, 1000);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let maxWidth = document.getElementById("root").clientWidth;
            let width = document.getElementsByClassName("text")[0].clientWidth;
            let left = (e.clientX + width > maxWidth ? maxWidth - width : e.clientX);
            document.getElementsByClassName("text")[0].style.left = left + "px";
            document.getElementsByClassName("text")[0].style.bottom = (window.innerHeight - e.clientY) + "px";
        });

        document.getElementsByClassName("container")[0].addEventListener("mouseover", (e) => {
            document.getElementsByClassName("text")[0].style.display = "block";
        })
        document.getElementsByClassName("container")[0].addEventListener("mouseout", (e) => {
            document.getElementsByClassName("text")[0].style.display = "none";
        })
    }, [])
    useEffect(() => {
        let hands = document.getElementsByClassName("hand");
        hands[0].style.transform = "rotate(" + ((storeHour % 12) / 12 + 0.5) + "turn)";
        hands[1].style.transform = "rotate(" + ((storeMinute % 60) / 60 + 0.5) + "turn)";
        hands[2].style.transform = "rotate(" + ((storeSecond % 60) / 60 + 0.5) + "turn)";
    }, [storeSecond])
    
    return (
        <div>
            <div className="container">
                <div className="clock">
                    <div className="hour hand"></div>
                    <div className="minute hand"></div>
                    <div className="second hand"></div>
                </div>
            </div>
            <div className="text">
                {storeHour >= 10 ? storeHour : "0" + storeHour} : {storeMinute >= 10 ? storeMinute : "0" + storeMinute} : {storeSecond >= 10 ? storeSecond : "0" + storeSecond}
            </div>
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