import { Switch as ArkSwitch, type SwitchRootProps } from '@ark-ui/solid';
import { children, Component, mergeProps, Show, splitProps } from 'solid-js';
import s from './Switch.module.scss';
import { ThemeBaseComponent } from '@/shared/types/theme.ts';

type SwitchProps = SwitchRootProps & ThemeBaseComponent;

const defaultProps: SwitchProps = {
    color: 'primary',
    size: 'medium',
};

export const Switch: Component<Partial<SwitchProps>> = props => {
    const finalProps: SwitchProps = mergeProps(defaultProps, props);
    const [variantProps, switchProps] = splitProps(finalProps, ['size', 'color']);
    const [localProps, rootProps] = splitProps(switchProps, ['children']);
    const getChildren = children(() => localProps.children);

    return (
        <ArkSwitch.Root
            classList={{ [s.switch]: true, [s[variantProps.size]]: true, [s[variantProps.color]]: true }}
            {...rootProps}
        >
            <ArkSwitch.Control>
                <ArkSwitch.Thumb />
            </ArkSwitch.Control>
            <Show when={getChildren()}>
                <ArkSwitch.Label>{getChildren()}</ArkSwitch.Label>
            </Show>
            <ArkSwitch.HiddenInput />
        </ArkSwitch.Root>
    );
};
