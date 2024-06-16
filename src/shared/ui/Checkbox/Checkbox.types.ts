import { ThemeColors } from '@/shared/const/colors.ts';
import { InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
    /**
     * Текст label
     */
    label?: ReactNode;
    /**
     * Установить цвет кнопки
     * @default primary
     */
    color: ThemeColors;
};
