const Reducer = (state, action) => {
    switch (action.type) {
        case 'newCat':
            return {...state, cat: [...state.cat, action.payload]};
        case 'newDog':
            return {...state, dog: [...state.dog, action.payload]};
        case 'deleteCat':
            return {...state, cat: state.cat.filter(value => value.cat !== action.payload)};
        case 'deleteDog':
            return {...state, dog: state.dog.filter(value => value.dog !== action.payload)};

        default:
            throw new Error("???");
    }
};

export {Reducer};