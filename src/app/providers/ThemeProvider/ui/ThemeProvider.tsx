import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts';
import { Theme } from '@tauri-apps/api/window';
import { ThemeContext, ThemeContextProps } from '@/shared/context/ThemeContext.ts';
import { FC, useEffect, useState } from 'react';

type ThemeProviderProps = {
    initialTheme?: Theme;
    children: JSX.Element;
};

const fallbackTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: FC<ThemeProviderProps> = props => {
    const [isThemeInited, setThemeInited] = useState<boolean>(false);
    const [theme, setTheme] = useState<Theme>(props.initialTheme || fallbackTheme || 'light');

    const defaultProps: ThemeContextProps = {
        theme,
        setTheme,
    };

    if (!isThemeInited && props.initialTheme) {
        setThemeInited(true);
        setTheme(props.initialTheme);
    }

    useEffect(() => {
        document.body.className = theme === 'light' ? 'app_theme_light' : 'app_theme_dark';
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    return <ThemeContext.Provider value={defaultProps}>{props.children}</ThemeContext.Provider>;
};
