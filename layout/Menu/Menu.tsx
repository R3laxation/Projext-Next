import {useContext, useEffect} from "react";
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem} from "../../intergaces/menu.interface";
import CoursesIcon from './Icons/courses.svg';
import ServicesIcon from './Icons/services.svg.svg';
import BooksIcon from './Icons/books.svg.svg';
import GoodsIcon from './Icons/goods.svg.svg';
import {TopLevelCategory} from "../../intergaces/page.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Курсы', icon: <ServicesIcon/>, id: TopLevelCategory.Courses},
    {route: 'books', name: 'Курсы', icon: <BooksIcon/>, id: TopLevelCategory.Courses},
    {route: 'goods', name: 'Курсы', icon: <GoodsIcon/>, id: TopLevelCategory.Courses},
];

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    useEffect(() => {
        setMenu && setMenu([]);
    });

    return (
        <div>
            <ul>
                {menu.map((m) => <li key={m._id.secondCategory}>{m._id.secondCategory}</li>)}
            </ul>
        </div>
    )
}