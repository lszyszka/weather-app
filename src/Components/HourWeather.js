import React from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import WeatherIcon from 'react-icons-weather';
import hourweather from '../Assets/scss/hourweather.scss';

class HourWeather extends React.Component {


    static propTypes = {
        city: PropTypes.string,
        getWeather: PropTypes.func
    };

    componentDidMount() {

    }

    render() {
        let count = 0;
        if (this.props.weather !== undefined) {
            return <div>
                <div className="temp">
                    <span>{Math.floor(this.props.weather.data.list[count].main.temp - 273.15)}&deg;</span>
                    <span>{Math.floor(this.props.weather.data.list[count + 1].main.temp - 273.15)}&deg;</span>
                    <span>{Math.floor(this.props.weather.data.list[count + 2].main.temp - 273.15)}&deg;</span>
                    <span>{Math.floor(this.props.weather.data.list[count + 3].main.temp - 273.15)}&deg;</span>
                </div>
                <div className="icon">
                    <WeatherIcon className="weather-today"
                                 name="owm"
                                 iconId={this.props.weather.data.list[count].weather[count].id}
                                 flip="horizontal"
                                 rotate="90"/>
                    <WeatherIcon className="weather-today"
                                 name="owm"
                                 iconId={this.props.weather.data.list[count + 1].weather[count].id}
                                 flip="horizontal"
                                 rotate="90"/>
                    <WeatherIcon className="weather-today"
                                 name="owm"
                                 iconId={this.props.weather.data.list[count + 2].weather[count].id}
                                 flip="horizontal"
                                 rotate="90"/>
                    <WeatherIcon className="weather-today"
                                 name="owm"
                                 iconId={this.props.weather.data.list[count + 3].weather[count].id}
                                 flip="horizontal"
                                 rotate="90"/>

                </div>
                <div className="hour">
                    <span> {this.props.weather.data.list[count].dt_txt.substring(11, 16)} </span>
                    <span>   {this.props.weather.data.list[count + 1].dt_txt.substring(11, 16)} </span>
                    <span>{this.props.weather.data.list[count + 2].dt_txt.substring(11, 16)}</span>
                    <span>{this.props.weather.data.list[count + 3].dt_txt.substring(11, 16)}</span>
                </div>
            </div>

        }
        else {
            return null
        }
    }
}

HourWeather = connect(mapStateToProps, mapDispatchToProps)(HourWeather);
export default HourWeather;