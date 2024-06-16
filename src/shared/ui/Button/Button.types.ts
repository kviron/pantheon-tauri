import { ThemeColors } from '@/shared/const/colors.ts';
import { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Размеры кнопки
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Варианты кнопок
 */
export type ButtonVariant = 'text' | 'filled' | 'outlined';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     * Увеличивает кнопку на всю свободную ширину
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Размер кнопки
     * @default medium
     */
    size?: ButtonSize;

    /**
     * Вариант кнопки
     * @default text
     */
    variant?: ButtonVariant;

    /**
     * Флаг, делающий кнопку квадратной
     * @default false
     */
    square?: boolean;

    /**
     * Установить цвет кнопки
     * @default primary
     */
    color?: ThemeColors;

    /**
     * Содержимое кнопки
     */
    children?: ReactNode;
};
