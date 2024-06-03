import overrideTheme from './override';
import { Theme } from '@tauri-apps/api/window';

export const getTheme = (theme: Theme) => {
    return overrideTheme(theme);
};
