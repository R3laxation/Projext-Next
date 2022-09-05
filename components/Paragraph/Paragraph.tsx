import cn from 'classnames';
import {ParagraphProps} from "./ParagraphProps";
import styles from './Paragraph.module.css';


export const Paragraph = ({size = 'm', children, className, ...props}: ParagraphProps): JSX.Element => {

    return (
        <p className={cn(styles.p, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.l]: size === 'l'
        })}
           {...props}
        >
            {children}</p>
    )
}