import { Component, createSignal, JSX } from 'solid-js';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts';
import { Theme } from '@tauri-apps/api/window';
import { ThemeContext, ThemeContextProps } from '@/shared/context/ThemeContext.ts';

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

    const defaultProps: ThemeContextProps = {
        theme,
        setTheme,
    };

    return <ThemeContext.Provider value={defaultProps}>{props.children}</ThemeContext.Provider>;
};
