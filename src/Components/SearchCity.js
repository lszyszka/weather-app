import React from 'react';
import PropTypes from 'prop-types';
import {mapStateToProps} from "../mapStateToProps";
import {mapDispatchToProps} from "../mapDispatchToProps";
import connect from "react-redux/es/connect/connect";
import axios from "axios";
import searchCity from "../Assets/scss/searchCity.scss"
import {IoIosSearch} from 'react-icons/io';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class City extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'London',
        }
    }


    static propTypes = {
        city: PropTypes.string,
    };

    handleInput(e) {
        this.setState({inputValue: e.target.value})
    }

    handleGetApi() {
        let notify = () => toast.error("Wrong city!");
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=` + this.state.inputValue + `&appid=3b1ebacd50586cc78e3bbbf1a089f683` + `&lang=en`)
            .then(res => {
                this.props.getWeather(res);
                console.log(res);
                console.log("State: ", this.props.weather);
            }).catch(function (error) {
            notify();


        })
    }


    componentDidMount() {
        this.handleGetApi();
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleInput(e);
            this.handleGetApi();
        }
    }


    render() {
        const {city} = this.props;
        return <div className="search">
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            <input placeholder={"Enter city name "} type="text" name="city" onChange={(e) => {
                this.handleInput(e)
            }} onKeyPress={(e) => {
                this.handleKeyPress(e)
            }}/>
            <IoIosSearch className="searchLupa" style={{marginBottom: "-10px", cursor: "pointer"}} size={"2em"}
                         onClick={(e) => {
                             this.handleGetApi()
                         }}/>

        </div>
    }
}

City = connect(mapStateToProps, mapDispatchToProps)(City);
export default City;