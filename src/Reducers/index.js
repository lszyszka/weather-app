let initialState = {
    city: '',
    weather: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        //GET City name from input
        case 'GET_CITY': {
            return {...state, city: action.payload}
        }

        case 'GET_WEATHER': {
            return {...state, weather: action.payload}
        }
    }
}

export default reducer;