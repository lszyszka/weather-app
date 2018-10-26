import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import WeatherIcon from 'react-icons-weather';
import day_weather from '../Assets/scss/day_weather.scss'

class DayWeather extends React.Component {


    static propTypes = {
        city: PropTypes.string,
        getWeather: PropTypes.func
    };


    render() {
        let count = 0;
        const {weather} = this.props;
        if (this.props.weather !== undefined) {
            return <div className="day">
                <div className="text">{this.props.text}</div>
                <div className="rest">
                <span>{<WeatherIcon className="weather-today"
                                    name="owm"
                                    iconId={this.props.weather.data.list[this.props.icon].weather[0].id}
                                    flip="horizontal"
                                    rotate="90"/>}</span>
                    <span>{Math.floor(this.props.weather.data.list[this.props.icon].main.temp - 273.15)} &deg;</span>
                </div>
            </div>

        }
        else {
            return null
        }
    }


}

DayWeather = connect(mapStateToProps, mapDispatchToProps)(DayWeather);
export default DayWeather;