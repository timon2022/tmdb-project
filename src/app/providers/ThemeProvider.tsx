import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme
    toggleTheme: () => void;
}
type Props =
    {
        children: React.ReactNode
    }
const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme') as Theme;
        return saved || 'light';
    });


    useEffect(() => {
        document.documentElement.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (<ThemeContext.Provider value={{ theme: theme, toggleTheme }} >
        {children}
    </ThemeContext.Provider>)
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within ThemeProvider');
    return context;
};