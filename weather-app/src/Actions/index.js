export const getCity = (e) => ({
    type: 'GET_CITY',
    payload: e.target.value
});

export const setCity = () => ({
    type: 'SET_CITY'
});

export const getWeather = (response) => ({
    type: 'GET_WEATHER',
    payload: response
});
