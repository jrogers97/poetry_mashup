const initialState = {
    poem: "ode_sea"
};

const poemReducer = function(state=initialState, action) {
    switch(action.type) {
        case 'LOAD_POEM':
            return Object.assign({}, state, {poem: action.poem});
    }

    return state;
};

export default poemReducer;