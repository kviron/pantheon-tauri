import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts';
import { Theme } from '@tauri-apps/api/window';
import { ThemeContext, ThemeContextProps } from '@/shared/context/ThemeContext.ts';
import { FC, useEffect, useMemo, useState } from 'react';
import { ConfigProvider } from 'antd';
import { getThemeConfig } from '@/app/providers/ThemeProvider/config/theme.ts';

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

    const themeConfig = useMemo(() => {
        return getThemeConfig(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            <ConfigProvider theme={themeConfig}>{props.children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};
