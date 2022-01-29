import React from 'react';

const Cats = ({dispatch, cat_X}) => {
    return (
        <div>
            {cat_X.cat}
            {cat_X.cat.length > 0 &&
                <button onClick={() => dispatch({type: "deleteCat", payload: cat_X.id})}>X</button>}
        </div>
    );
};

export default Cats;