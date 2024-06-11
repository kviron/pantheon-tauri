import s from './Checkbox.module.scss';
import { Component, createSignal, mergeProps, Show, splitProps } from 'solid-js';
import { CheckboxProps } from './Checkbox.types.ts';
import { uuidv4 } from '@/shared/lib/uuid.ts';
import CheckIcon from '@/assets/icons/check.svg';

// Устанавливаем пропсы по умолчанию
const defaultProps: CheckboxProps = {
    size: 'medium',
    tabindex: 0,
    type: 'checkbox',
    color: 'primary',
};

export const Checkbox: Component<Partial<CheckboxProps>> = props => {
    const finalProps: CheckboxProps = mergeProps(defaultProps, props);
    const [handlers] = splitProps(finalProps, ['onChange']);
    const id = finalProps.id ?? uuidv4();
    const [localState, setLocalState] = createSignal<boolean>(finalProps.checked ?? false);

    const handleChange = (value: boolean) => {
        setLocalState(value);
        handlers.onChange?.(value);
    };

    return (
        <div
            classList={{
                [s.wrapper]: true,
                [s.disabled]: finalProps.disabled,
            }}
        >
            <input
                id={id}
                classList={{
                    [s.input]: true,
                    [s.disabled]: finalProps.disabled,
                    [s.checked]: localState(),
                    // colors
                    [s.warning]: finalProps.color === 'warning',
                    [s.error]: finalProps.color === 'error',
                    [s.info]: finalProps.color === 'info',
                    [s.success]: finalProps.color === 'success',
                    [s.primary]: finalProps.color === 'primary',
                    [s.danger]: finalProps.color === 'danger',
                    [s.secondary]: finalProps.color === 'secondary',
                }}
                {...finalProps}
                checked={localState()}
                onChange={e => handleChange(e.currentTarget.checked)}
            />
            <div
                classList={{
                    [s.checkbox]: true,
                    [s.checked]: localState(),
                    [s.disabled]: finalProps.disabled,
                }}
            >
                <CheckIcon />
            </div>
            <Show when={finalProps.label}>
                <label
                    for={id}
                    classList={{
                        [s.label]: true,
                        [s.disabled]: finalProps.disabled,
                        [s.checked]: localState(),
                    }}
                >
                    {finalProps.label}
                </label>
            </Show>
        </div>
    );
};
