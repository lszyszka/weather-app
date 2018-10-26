let initialState = {
    weather: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WEATHER': {
            return {...state, weather: action.payload}
        }
    }
}

export default reducer;