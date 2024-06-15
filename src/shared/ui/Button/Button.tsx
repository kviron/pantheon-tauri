import s from './Button.module.scss';
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
    const [variantProps, serviceProps, buttonProps] = splitProps(
        finalProps,
        ['class', 'size', 'color', 'variant', 'square', 'fullWidth'],
        ['classList', 'id'],
    );

    return (
        <button
            {...buttonProps}
            id={serviceProps.id ?? uuidv4()}
            classList={{
                [s.button]: true,
                // sizes
                [s[variantProps.size]]: !!variantProps.size,
                // colors
                [s[variantProps.color]]: !!variantProps.color,
                // variants
                [s[variantProps.variant]]: !!variantProps.variant,
                // statuses
                [s.square]: variantProps.square,
                [s.fullWidth]: variantProps.fullWidth,
                [s.disabled]: finalProps.disabled,
                ...serviceProps.classList,
            }}
        />
    );
};
