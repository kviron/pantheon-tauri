import { Component, JSX, mergeProps, Show, splitProps } from 'solid-js';
import s from './Switch.module.scss';
import { ThemeBaseComponent } from '@/shared/types/theme.ts';
import { uuidv4 } from '@/shared/lib/uuid.ts';

type SwitchProps = ThemeBaseComponent &
    JSX.InputHTMLAttributes<HTMLInputElement> & {
        label?: JSX.Element;
        onChange?: (checked: boolean) => void;
    };

const defaultProps: SwitchProps = {
    color: 'primary',
    size: 'medium',
};

const Switch: Component<Partial<SwitchProps>> = props => {
    const finalProps: SwitchProps = mergeProps(defaultProps, props);
    const [variant, content, switchProps] = splitProps(finalProps, ['size', 'color'], ['label']);
    const id = finalProps.id ?? uuidv4();

    const handleChange = (value: boolean) => {
        finalProps.onChange?.(value);
    };

    return (
        <div classList={{ [s.switch]: true, [s[variant.size]]: true, [s[variant.color]]: true }}>
            <span class={s.control}>
                <span class={s.thumb} />
            </span>
            <Show when={content.label}>
                <label for={id}>{content.label}</label>
            </Show>
            <input
                {...switchProps}
                id={id}
                class={s.input}
                onChange={e => handleChange(e.currentTarget.checked)}
            />
        </div>
    );
};

export { Switch };
