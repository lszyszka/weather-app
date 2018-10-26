import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {getCity} from "../Actions";
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import Weather from "./Weather";
import axios from "axios";
import searchCity from "../Assets/scss/searchCity.scss"

class City extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'London'
        }
    }

    static propTypes = {
        city: PropTypes.string,
        cityInput: PropTypes.string,
        getCity: PropTypes.func,
        setCity: PropTypes.func
    };

    handleInput(e) {
        this.setState({inputValue: e.target.value})
    }

    handleGetApi() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=` + this.state.inputValue + `&appid=3b1ebacd50586cc78e3bbbf1a089f683` + `&lang=en`)
            .then(res => {
                this.props.getWeather(res);
                console.log(res);
                console.log("State: ", this.props.weather);
            })
    }

    render() {

        const {city, getCity} = this.props;
        console.log(city);
        return <div className="search">
            <input placeholder={"Wpisz miasto "} type="text" name="city" onChange={(e) => {
                this.handleInput(e)
            }}/>
            <button value={this.state.inputValue} onClick={() => {
                this.handleGetApi()
            }}>Search
            </button>
        </div>
    }


}

City = connect(mapStateToProps, mapDispatchToProps)(City);
export default City;