import {useContext} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem, PageItem} from "../../intergaces/menu.interface";
import CoursesIcon from './Icons/courses.svg';
import ServicesIcon from './Icons/services.svg';
import BooksIcon from './Icons/books.svg';
import GoodsIcon from './Icons/goods.svg';
import {TopLevelCategory} from "../../intergaces/page.interface";
import cn from "classnames";
import styles from './Menu.module.css';
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Courses},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Courses},
    {route: 'goods', name: 'Товары', icon: <GoodsIcon/>, id: TopLevelCategory.Courses},
];

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const buildFirstLevel = () => {
        return (
            <div>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={'/${menu.route}'}>
                            <a>
                                <div className={cn(styles.firstLevel, {
                                    [styles.firstLevelActive]: m.id === firstCategory
                                })}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </div>
                            </a>
                        </Link>
                        {m.id === firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </div>
        )
    };
    const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
        return (
            <div className={styles.secondBlock}>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>
                            {m._id.secondCategory}
                        </div>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: m.isOpened
                        })}>
                            {buildThirdLevel(m.pages, menuItem.route)}
                        </div>
                    </div>
                ))};
            </div>
        )
    };
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(page => (
                <Link href={`/${route}/${page.alias}`}>
                    <a className={cn(styles.thirdLevel, {
                        [styles.thirdLevelActive]: false
                    })}>
                        {page.category}
                    </a>
                </Link>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
}