import s from './Switch.module.scss';
import { ThemeBaseComponent } from '@/shared/types/theme.ts';
import { uuidv4 } from '@/shared/lib/uuid.ts';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Show } from '@/shared/ui/Show';
import cl from 'classnames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly' | 'size' | 'color'>;

interface SwitchProps extends ThemeBaseComponent, HTMLInputProps {
    label?: ReactNode;
    onChange?: (checked: boolean) => void;
}

const Switch: FC<SwitchProps> = props => {
    const { id = uuidv4(), label, size = 'medium', color = 'primary', onChange, ...inputProps } = props;

    const handleChange = (value: boolean) => {
        onChange?.(value);
    };

    return (
        <div className={cl({ [s.switch]: true, [s[size]]: true, [s[color]]: true })}>
            <span className={s.control}>
                <span className={s.thumb} />
            </span>
            <Show when={label}>
                <label htmlFor={id}>{label}</label>
            </Show>
            <input
                {...inputProps}
                id={id}
                className={s.input}
                onChange={e => handleChange(e.currentTarget.checked)}
            />
        </div>
    );
};

export { Switch };
