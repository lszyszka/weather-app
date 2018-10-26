import React from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import WeatherIcon from 'react-icons-weather';
import weather from "../Assets/scss/weather.scss"

class Weather extends React.Component {


    static propTypes = {
        city: PropTypes.string,
        getWeather: PropTypes.func
    };


    render() {
        let count = 0;
        const {weather} = this.props;
        if (this.props.weather !== undefined) {
            return <div>
                <div className="today"><span>Today</span> <WeatherIcon className="weather-today"
                                                                       name="owm"
                                                                       iconId={this.props.weather.data.list[count].weather[count].id}
                                                                       flip="horizontal"
                                                                       rotate="90"/>{Math.floor(this.props.weather.data.list[count].main.temp - 273.15)}&deg;
                </div>
                <div className="info">
                    <span> {weather.data.city.name} </span><br/>
                    <span>{this.props.weather.data.list[count].weather[count].description}</span>
                </div>
            </div>
        }
        else {
            return <div>
                Wpisz miasto
            </div>
        }
    }


}

Weather = connect(mapStateToProps, mapDispatchToProps)(Weather);
export default Weather;