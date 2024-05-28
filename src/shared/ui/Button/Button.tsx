import { ButtonStylex } from './Button.stylex.ts';
import * as stylex from '@stylexjs/stylex';
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
            {...stylex.props(
                ButtonStylex.root,
                finalProps.fullWidth && ButtonStylex.fullWidth,
                ButtonStylex.size(finalProps.size),
            )}
            {...finalProps}
        />
    );
};
