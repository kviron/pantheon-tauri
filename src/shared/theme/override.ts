import { Theme as ThemeMui } from '@suid/material';
import { Theme as ThemeVariant } from '@tauri-apps/api/window';
import { lightTheme } from '@/shared/theme/light';
import { darkTheme } from '@/shared/theme/dark';

const overrideTheme = (variant: ThemeVariant): ThemeMui => {
    const baseTheme = variant === 'light' ? lightTheme : darkTheme;

    let theme: ThemeMui = {
        ...baseTheme,
    };

    theme = {
        ...theme,
    };

    return theme;
};

export default overrideTheme;
