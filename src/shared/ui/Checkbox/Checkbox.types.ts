import { JSX } from 'solid-js';
import { ThemeColors } from '@/shared/const/colors.ts';

export type CheckboxProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
    label?: JSX.Element;
    onChange?: (value: boolean) => void;
    /**
     * Установить цвет кнопки
     * @default primary
     */
    color: ThemeColors;
};
