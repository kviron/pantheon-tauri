import { JSX } from 'solid-js';

/**
 * Размеры кнопки
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Варианты кнопок
 */
export type ButtonVariant = 'text' | 'filled' | 'outlined';

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
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
};
