import React from 'react';

const Cats = ({dispatch, cat_X}) => {
    return (
        <div>
            {cat_X}
            {cat_X.length > 0 &&
                <button onClick={() => dispatch({type: "deleteCat"})}>X</button>}
        </div>
    );
};

export default Cats;