const Reducer = (state, action) => {
    switch (action.type) {
        case 'newCat':
            return {...state, cat: action.payload};
        case 'newDog':
            return {...state, dog: action.payload};
        case 'deleteCat':
            return {...state, cat: state.cat = ""};
        case 'deleteDog':
            return {...state, dog: state.dog = ""};
        default:
            throw new Error("???");
    }
};

export {Reducer};