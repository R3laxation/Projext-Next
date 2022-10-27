import cn from 'classnames';
import {TopPageComponentProps} from "./TopPageComponentProps";
import styles from './TopPageComponent.module.css';


export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {

    return (
            <>
                {products && products.length}
            </>
    )
}