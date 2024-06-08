import { createContext, JSX } from 'solid-js';
import { Theme } from '@tauri-apps/api/window';

export interface ThemeContextProps {
    theme: JSX.Accessor<Theme>;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
