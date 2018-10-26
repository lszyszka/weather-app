import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import City from "./Components/SearchCity";
import store from "./Store";
import {Provider} from 'react-redux';
import Weather from "./Components/Weather";
import HourWeather from "./Components/HourWeather";
import './Assets/scss/style.scss'
import DayWeather from "./Components/DayWeather";

class App extends Component {

    render() {
        let d = new Date();
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var n = weekday[d.getDay()];
        const imageUrl = require(`./img/back.png`)
        return (
            <div className="App">
                <Provider store={store}>
                    <div>
                        <City/>
                        <Weather/>
                        <HourWeather/>
                        <DayWeather text={weekday[d.getDay() + 1]} icon={8}/>
                        <DayWeather text={weekday[d.getDay() + 2]} icon={16}/>
                        <DayWeather text={weekday[d.getDay() + 3]} icon={24}/>
                        <DayWeather text={weekday[d.getDay() + 4]} icon={32}/>
                        <DayWeather text={weekday[d.getDay() + 5]} icon={39}/>
                    </div>
                </Provider>
            </div>
        );
    }
}

export default App;
