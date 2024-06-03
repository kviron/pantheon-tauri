import { createContext } from 'solid-js';
import { Theme } from '@tauri-apps/api/window';

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});
