import React, {Component} from 'react';
import './App.css';
import City from "./Components/SearchCity";
import store from "./Store";
import {Provider} from 'react-redux';
import Weather from "./Components/Weather";
import HourWeather from "./Components/HourWeather";
import './Assets/scss/style.scss'
import DayWeather from "./Components/DayWeather";

const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}


class App extends Component {

    render() {
        let d = new Date();
        let weekday = [];

        weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday',
            'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let i = 1;


        return (
                <div className="App">
                    <Provider store={store}>
                        <div>
                            <City/>
                            <Weather/>
                            <HourWeather/>
                            <DayWeather text={weekday[d.getDay() + i * 1]} icon={8}/>
                            <DayWeather text={weekday[d.getDay() + i * 2]} icon={16}/>
                            <DayWeather text={weekday[d.getDay() + i * 3]} icon={24}/>
                            <DayWeather text={weekday[d.getDay() + i * 4]} icon={32}/>
                        </div>
                    </Provider>
                </div>
        );
    }
}

export default App;
