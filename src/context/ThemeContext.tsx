import {createContext, ReactNode, useEffect, useState} from "react";

type Theme = 'light' | 'dark'

type ContextThemeType = {
    theme: Theme;
    changeTheme: (theme: string) => void
}

const defaultValue:ContextThemeType = {
    theme: 'light',
    changeTheme: (theme: string) => {
        console.log(theme)
    }
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme');
        return (saved === 'dark' || saved === 'light') ? saved : 'light';
    });

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme); // ← записуємо обране значення
    }, [theme]);

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeContext = createContext<ContextThemeType>(defaultValue);