import {createContext, CreateContext, useState} from "react";

export const FiltersContext = createContext({ countryName: '', region: ''});

export const  FiltersProvider = ({children}) => {

    const [ filter, setFilter ] = useState({countryName: '', region: ''});

    return (
        <FiltersContext.Provider value={{ filter, setFilter }} >
            {children}
        </FiltersContext.Provider>
    )
}