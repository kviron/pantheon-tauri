import styles from './Button.module.scss';
import { Component, mergeProps, splitProps } from 'solid-js';
import { ButtonProps } from './Button.types.ts';
import { uuidv4 } from '@/shared/lib/uuid.ts';

// Устанавливаем пропсы по умолчанию
const defaultProps: ButtonProps = {
    size: 'medium',
    fullWidth: false,
    variant: 'filled',
    square: false,
    tabindex: 0,
    type: 'button',
    color: 'primary',
};

export const Button: Component<Partial<ButtonProps>> = props => {
    const finalProps: ButtonProps = mergeProps(defaultProps, props);
    const id = finalProps.id ?? uuidv4();

    const [classes] = splitProps(finalProps, ['classList']);

    return (
        <button
            id={id}
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

                // statuses
                [styles.square]: finalProps.square,
                [styles.fullWidth]: finalProps.fullWidth,
                [styles.disabled]: finalProps.disabled,

                // colors
                [styles.warning]: finalProps.color === 'warning',
                [styles.error]: finalProps.color === 'error',
                [styles.info]: finalProps.color === 'info',
                [styles.success]: finalProps.color === 'success',
                [styles.primary]: finalProps.color === 'primary',
                [styles.danger]: finalProps.color === 'danger',
                [styles.secondary]: finalProps.color === 'secondary',
                ...classes.classList,
            }}
            {...finalProps}
        />
    );
};
