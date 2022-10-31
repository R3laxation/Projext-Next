import cn from 'classnames';
import {HhDataProps} from "./HhDataProps";
import styles from './HhData.module.css';
import {Card} from "../Card/Card";

export const Hhdata = ({count}: HhDataProps): JSX.Element => {

    return (
        <Card className={styles.count}>
            <div className={styles.title}>Всего вакансий</div>
            <div className={styles.statCount}>{count}</div>
        </Card>
    )
}