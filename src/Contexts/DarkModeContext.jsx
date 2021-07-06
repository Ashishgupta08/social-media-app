import { createContext, useContext, useEffect, useState } from "react";

const DarkModeCntext = createContext();

export function DarkModeProvider({ children }){

    const storedDarkMode = localStorage.getItem("DARK_MODE") | true;
    const [darkMode, setDarkMode] = useState(storedDarkMode);

    useEffect(() => {
        localStorage.setItem("DARK_MODE", darkMode);
    }, [darkMode]);

    return(
        <DarkModeCntext.Provider value={{ darkMode, setDarkMode }}>
            { children }
        </DarkModeCntext.Provider>
    )
}

export function useDarkMode(){
    return useContext(DarkModeCntext)
}