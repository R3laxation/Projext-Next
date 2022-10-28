import styles from './HhData.module.css';
import {Card} from "../Card/Card";
import {HhDataProps} from "./HhDataProps";
import RateIcon from './rate.svg';

export const HhData = ({count}: HhDataProps): JSX.Element => {

    return (
            <div>
                <Card className={styles.count}>
                    <div className={styles.title}>Всего вакансий</div>
                    <div className={styles.statValue}>{count}</div>
                </Card>
                <Card className={styles.salary}>
                    <div className={styles.title}>Всего вакансий</div>
                    <div className={styles.salaryValue}>{count}</div>
                    <div className={styles.rate}>
                        <RateIcon className={styles.filled}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </Card>
            </div>
    )
}