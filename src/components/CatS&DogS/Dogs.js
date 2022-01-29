import React from 'react';

const Dogs = ({dispatch, dog_X}) => {
    return (
        <div>
            {dog_X.dog}
            {dog_X.dog.length > 0 &&
                <button onClick={() => dispatch({type: "deleteDog", payload: dog_X.id})}>X</button>}
        </div>
    );
};

export default Dogs;