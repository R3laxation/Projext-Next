import cn from 'classnames';
import {RatingProps} from "./RatingProps";
import styles from './Rating.module.css';
import {useEffect, useState} from "react";
import StarIcon from './star.svg';


export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        cunstructRating(rating);
    }, [rating]);

    const cunstructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r, i) => {
            return (
                <StarIcon className={cn(styles.star, {
                    [styles.filled]: i < currentRating
                })}/>
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    )
}