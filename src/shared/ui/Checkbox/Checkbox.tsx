import s from './Checkbox.module.scss';
import { CheckboxProps } from './Checkbox.types.ts';
import { uuidv4 } from '@/shared/lib/uuid.ts';
import cl from 'classnames';
import { FC, useRef } from 'react';
import { Show } from '@/shared/ui/Show';

const Checkbox: FC<CheckboxProps> = props => {
    const {
        id = uuidv4(),
        size = 'medium',
        disabled = false,
        label,
        checked,
        color = 'primary',
        type = 'checkbox',
        ...other
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const modsClasses = cl({
        [s[size]]: true,
        [s[color]]: true,
    });

    const statusClasses = cl({
        [s.disabled]: disabled,
        [s.checked]: checked,
    });

    return (
        <div
            className={cl({
                [s.wrapper]: true,
                statusClasses,
                modsClasses,
            })}
        >
            <input
                id={id}
                ref={ref}
                type={type}
                className={cl({ [s.input]: true })}
                checked={checked}
                disabled={disabled}
                {...other}
            />
            <div
                className={cl({
                    [s.checkbox]: true,
                    [s.checked]: checked,
                    [s.disabled]: disabled,
                })}
            >
                <Show when={checked}>V</Show>
            </div>
            <Show when={label}>
                <label
                    htmlFor={id}
                    className={cl({
                        [s.label]: true,
                        statusClasses,
                    })}
                >
                    {label}
                </label>
            </Show>
        </div>
    );
};

export { Checkbox };
