import {useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'incA':
            return {...state, a: state.a + 1};
        case 'decA':
            return {...state, a: state.a - 1};
        case 'incB':
            return {...state, b: state.b + 1};
        case 'decB':
            return {...state, b: state.b - 1};
        case 'incC':
            return {...state, c: state.c + 1};
        case 'decC':
            return {...state, c: state.c - 1};
        default:
            throw new Error("???");
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});

    return (
        <div className={'dFlex'}>
            <div className={'border'}>
                <div className={'center'}>{state.a}</div>
                <button onClick={() => dispatch({type: 'incA'})}>+1</button>
                <button onClick={() => dispatch({type: 'decA'})}>-1</button>
            </div>
            <div className={'border'}>
                <div className={'center'}>{state.b}</div>
                <button onClick={() => dispatch({type: 'incB'})}>+1</button>
                <button onClick={() => dispatch({type: 'decB'})}>-1</button>
            </div>
            <div className={'border'}>
                <div className={'center'}>{state.c}</div>
                <button onClick={() => dispatch({type: 'incC'})}>+1</button>
                <button onClick={() => dispatch({type: 'decC'})}>-1</button>
            </div>
        </div>
    );
};

export default UseReducer;