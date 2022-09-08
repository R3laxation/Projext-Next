import cn from 'classnames';
import {HeaderProps} from "./HeaderProps";
import styles from './Header.module.css';


export const Header = ({...props}: HeaderProps): JSX.Element => {

    return (
            <div {...props}>
                Header
            </div>
    )
}