import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";

const ThemeProvider :FC = ({children}) => {
    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
    const [theme, setTheme] = useState(defaultTheme);

    const deafaultProps = useMemo(()=>({
        theme, setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={deafaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;