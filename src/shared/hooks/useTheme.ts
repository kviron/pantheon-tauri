import { useContext } from 'solid-js';
import { ThemeContext } from '@/shared/context/ThemeContext.ts';
import { Theme } from '@tauri-apps/api/window';

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme()) {
            case 'dark':
                newTheme = 'light';
                break;
            case 'light':
                newTheme = 'dark';
                break;
            default:
                newTheme = 'light';
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    };

    return {
        theme: theme || 'light',
        toggleTheme,
    };
};
