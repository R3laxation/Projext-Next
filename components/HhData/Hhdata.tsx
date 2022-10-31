import cn from 'classnames';
import {HhDataProps} from "./HhDataProps";
import styles from './HhData.module.css';


export const Hhdata = ({}: HhDataProps): JSX.Element => {

    return (
        <div className={cn(styles.card, className, {
            [styles.blue]: color === 'blue'
        })}
             {...props}
        >
            {children}
        </div>
    )
}