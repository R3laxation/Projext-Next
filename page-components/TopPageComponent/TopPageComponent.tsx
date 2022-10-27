import cn from 'classnames';
import {TopPageComponentProps} from "./TopPageComponentProps";
import styles from './TopPageComponent.module.css';
import {Htag, Tag} from "../../components";


export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    return (
            <>
                <div >
                    <Htag tag={'h1'}>{page.title}</Htag>
                    {products && <Tag color={'grey'} size={'m'}>{products.length}</Tag>}
                    <span></span>
                </div>
                {products && products.length}
            </>
    )
}