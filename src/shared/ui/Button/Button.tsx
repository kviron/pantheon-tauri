import styles from './Button.module.scss';
import { Component, mergeProps, splitProps } from 'solid-js';
import { ButtonProps } from './Button.types.ts';

// Устанавливаем пропсы по умолчанию
const defaultProps: ButtonProps = {
    size: 'medium',
    fullWidth: false,
    variant: 'text',
    square: false,
    tabindex: 0,
    type: 'button',
};

export const Button: Component<ButtonProps> = props => {
    const finalProps = mergeProps(defaultProps, props);

    const [classes] = splitProps(finalProps, ['classList']);

    return (
        <button
            classList={{
                [styles.button]: true,
                // sizes
                [styles.small]: finalProps.size === 'small',
                [styles.medium]: finalProps.size === 'medium',
                [styles.large]: finalProps.size === 'large',
                // variants
                [styles.text]: finalProps.variant === 'text',
                [styles.filled]: finalProps.variant === 'filled',
                [styles.outlined]: finalProps.variant === 'outlined',

                [styles.square]: finalProps.square,
                [styles.disabled]: finalProps.disabled,
                ...classes.classList,
            }}
            {...finalProps}
        />
    );
};
