import {useReducer} from 'react';

import {Reducer} from "./Reducer";


const UseReducer = () => {
    const [state, dispatch] = useReducer(Reducer, {x: 0});

    return (
            <div className={'border'}>
                <div className={'center'}>{state.x}</div>
                <button onClick={() => dispatch({type: 'inc'})}>+1</button>
                <button onClick={() => dispatch({type: 'dec'})}>-1</button>
            </div>
    );
};

export default UseReducer;