import { Component, createSignal, JSX } from 'solid-js';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts';
import { Theme } from '@tauri-apps/api/window';
import { ThemeContext } from '@/shared/context/ThemeContext.ts';

type ThemeProviderProps = {
    initialTheme?: Theme;
    children: JSX.Element;
};

const fallbackTheme = window.localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;

export const ThemeProvider: Component<ThemeProviderProps> = props => {
    const [isThemeInited, setThemeInited] = createSignal<boolean>(false);

    const [theme, setTheme] = createSignal<Theme>(props.initialTheme || fallbackTheme || 'light');

    if (!isThemeInited && props.initialTheme) {
        setTheme(props.initialTheme);
        setThemeInited(true);
    }

    const handleChangeTheme = (theme: Theme) => {
        document.body.className = theme === 'light' ? 'app_theme_light' : 'app_theme_dark';
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
        setTheme(theme);
    };

    const toggleTheme = () => {
        handleChangeTheme(theme() === 'light' ? 'dark' : 'light');
    };

    const defaultProps = {
        theme: theme(),
        setTheme: handleChangeTheme,
        toggleTheme,
    };

    return <ThemeContext.Provider value={defaultProps}>{props.children}</ThemeContext.Provider>;
};
