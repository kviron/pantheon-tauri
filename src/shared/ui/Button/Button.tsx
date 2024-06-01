import styles from './Button.module.scss';
import { Component, JSX, mergeProps } from 'solid-js';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
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
};

export type ButtonSize = 'small' | 'medium' | 'large';

// Устанавливаем пропсы по умолчанию
const defaultProps: ButtonProps = {
    size: 'small',
    fullWidth: false,
};

export const Button: Component<ButtonProps> = props => {
    const finalProps = mergeProps(defaultProps, props);

    return (
        <button
            class={styles.button}
            {...finalProps}
        />
    );
};
