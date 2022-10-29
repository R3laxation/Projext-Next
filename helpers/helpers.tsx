import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import CoursesIcon from "./Icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesIcon from "./Icons/services.svg";
import BooksIcon from "./Icons/books.svg";
import GoodsIcon from "./Icons/goods.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: '[type]', name: 'Курсы', icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Courses},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Courses},
    {route: 'goods', name: 'Товары', icon: <GoodsIcon/>, id: TopLevelCategory.Courses},
];


export const priceRu = (price: number) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '');
