import { FC } from 'react';
import starWhite from 'assets/icons/star_white.svg';
import starGrey from 'assets/icons/star_grey.svg';

interface IStarsByRating {
    rating: number;
}

const StarsByRating: FC<IStarsByRating> = ({ rating }) => {
    return (
        <>
            {Array(rating)
                .fill(1)
                .map((item, index) => {
                    return <img src={starWhite} alt='' key={index} />;
                })}
            {Array(5 - rating)
                .fill(1)
                .map((item, index) => {
                    return <img src={starGrey} alt='' key={index} />;
                })}
        </>
    );
};

export { StarsByRating };
