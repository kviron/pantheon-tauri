export type ThemeColors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'error' | 'info';
export type ThemeSizes = 'small' | 'medium' | 'large';

export enum EThemeColors {
    Primary = 'primary',
    Warning = 'warning',
    Success = 'success',
    Secondary = 'secondary',
    Danger = 'danger',
    Error = 'error',
    Info = 'info',
}

export interface ThemeColorProps {
    /**
     * Установить цвет кнопки
     * @default primary
     */
    color?: ThemeColors;
}

export interface ThemeSizeProps {
    /**
     * Установить цвет кнопки
     * @default primary
     */
    size?: ThemeSizes;
}

export interface ThemeBaseComponent extends ThemeSizeProps, ThemeColorProps {}
