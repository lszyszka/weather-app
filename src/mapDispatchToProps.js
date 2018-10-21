import * as act from './Actions/index';

export const mapDispatchToProps = ({
    getCity: act.getCity,
    getWeather: act.getWeather,
    setCity: act.setCity
});