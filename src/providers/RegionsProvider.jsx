import {createContext, useState} from "react";

export const RegionsContext = createContext([]);

export const  RegionsProvider = ({children}) => {

    const [ regions, setRegions ] = useState([]);

    return (
        <RegionsContext.Provider value={{ regions, setRegions }} >
            {children}
        </RegionsContext.Provider>
    )
}