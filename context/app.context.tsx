import {createContext, ReactNode} from "react";
import {TopLevelCategory} from "../intergaces/page.interface";
import {MenuItem} from "../intergaces/menu.interface";


export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: MenuItem) => void;
}

export const AppContext = createContext<IAppContext>({menu: [], firstCategory: TopLevelCategory.Courses});

export const AppContextProvider = ({menu, firstCategory, children}: IAppContext & {children: ReactNode}): JSX.Element => {



    return <AppContext.Provider>
        {children}
        </AppContext.Provider>;
};
