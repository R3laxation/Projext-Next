import cn from 'classnames';
import {HhDataProps} from "./HhDataProps";
import styles from './HhData.module.css';
import {Card} from "../Card/Card";

export const Hhdata = ({count}: HhDataProps): JSX.Element => {

    return (
        <Card className={styles.hhCount}>
            <div className={styles.hhStatTitle}>Всего вакансий</div>
            <div className={styles.hhStatCount}>{count}</div>
        </Card>
    )
}