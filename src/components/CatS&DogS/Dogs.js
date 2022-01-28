import React from 'react';

const Dogs = ({dispatch, dog_X}) => {
    return (
        <div>
            {dog_X}
            {dog_X.length > 0 &&
                <button onClick={() => dispatch({type: "deleteDog"})}>X</button>}
        </div>
    );
};

export default Dogs;