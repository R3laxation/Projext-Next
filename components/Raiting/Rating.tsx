import cn from 'classnames';
import {RatingProps} from "./RatingProps";
import styles from './Rating.module.css';
import {useEffect, useState, KeyboardEvent} from "react";
import StarIcon from './star.svg';


export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {

    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        cunstructRating(rating);
    }, [rating]);

    const cunstructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r, i) => {
            return (
                <span onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClickHandler(i + 1)}>
                                        <StarIcon className={cn(styles.star, {
                                            [styles.filled]: i < currentRating,
                                            [styles.editable]: isEditable

                                        })}
                                                  tabIndex={isEditable ? 0 : -1}
                                                  onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
                                        />
                    </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const onClickHandler = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        cunstructRating(i);
    }

    const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code !== 'Space' || !setRating) {
            return
        }
        setRating(i);
    }

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    )
}