import {TopPageComponentProps} from "./TopPageComponentProps";
import styles from './TopPageComponent.module.css';
import {Card, Htag, Tag} from "../../components";


export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'grey'} size={'m'}>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            {products && products.length}
            <div>
                {products && products.map(p => (<div key={p._id}>{p.title}</div>))}
            </div>
            <div className={styles.hhTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>
            <div className={styles.hh}>
                <Card>
                    <div>Всего вакансий</div>
                    <div>{page.hh?.count}</div>
                </Card>

            </div>
        </div>
    )
}