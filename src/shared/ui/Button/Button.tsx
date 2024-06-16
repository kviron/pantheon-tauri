import s from './Button.module.scss';
import { ButtonProps } from './Button.types.ts';
import { uuidv4 } from '@/shared/lib/uuid.ts';
import { FC, ForwardedRef, forwardRef } from 'react';
import cl from 'classnames';

export const Button: FC<ButtonProps> = forwardRef((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        id = uuidv4(),
        size = 'medium',
        color = 'primary',
        fullWidth = false,
        square = false,
        disabled = false,
        variant = 'filled',
        type = 'button',
        tabIndex = 0,
        className,
        ...other
    } = props;

    return (
        <button
            id={id}
            ref={ref}
            disabled={disabled}
            className={cl({
                [s.button]: true,
                [s[size]]: true,
                [s[color]]: true,
                [s[variant]]: true,
                [s.square]: square,
                [s.fullWidth]: fullWidth,
                [s.disabled]: disabled,
                className,
            })}
            {...other}
        />
    );
});
