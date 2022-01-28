const Reducer = (state, action) => {
    switch (action.type) {
        case 'newCat':
            return {...state, cat: action.payload};
        case 'newCat1':
            return {...state, cat1: action.payload};
        case 'newCat2':
            return {...state, cat2: action.payload};
        case 'newDog':
            return {...state, dog: action.payload};
        case 'newDog1':
            return {...state, dog1: action.payload};
        case 'newDog2':
            return {...state, dog2: action.payload};
        case 'deleteCat':
            return {...state, cat: state.cat = ""};
        case 'deleteCat1':
            return {...state, cat1: state.cat = ""};
        case 'deleteCat2':
            return {...state, cat2: state.cat = ""};
        case 'deleteDog':
            return {...state, dog: state.dog = ""};
        case 'deleteDog1':
            return {...state, dog1: state.dog = ""};
        case 'deleteDog2':
            return {...state, dog2: state.dog = ""};

        default:
            throw new Error("???");
    }
};

export {Reducer};