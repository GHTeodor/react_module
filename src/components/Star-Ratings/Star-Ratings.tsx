import React, {FC, useState} from 'react';
// @ts-ignore
import StarRatings from "react-star-ratings/build/star-ratings";


const StarRating: FC<{ vote_average: number, vote_count: number }> = ({vote_average, vote_count}) => {

    const [count, setCount] = useState(vote_count);
    const [average, setAverage] = useState<{ rating: number }>({rating: vote_average});

    return (
        <div>
            <div>{count === vote_count + 1 && <i>Your rating [{average.rating}]</i>}</div>
            {vote_average}
            <span onClick={() => setCount(vote_count + 1)}>
                <StarRatings
                    rating={average.rating}
                    starRatedColor="gold"
                    changeRating={(newRating: number): void => setAverage({rating: newRating})}
                    numberOfStars={10}
                    name="rating"/>
            </span>
            <small>{count} voters</small>
        </div>
    );
};

export {StarRating};