const Reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, x: state.x + 1};
        case 'dec':
            return {...state, x: state.x - 1};
        default:
            throw new Error("???");
    }
}

export {Reducer};