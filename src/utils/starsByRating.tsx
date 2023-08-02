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
                .map((item) => {
                    return <img src={starWhite} alt='' />;
                })}
            {Array(5 - rating)
                .fill(1)
                .map((item) => {
                    return <img src={starGrey} alt='' />;
                })}
        </>
    );
};

export { StarsByRating };
