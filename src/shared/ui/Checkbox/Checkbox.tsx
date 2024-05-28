import { Checkbox as CheckboxCore } from '@kobalte/core/checkbox';
import * as stylex from '@stylexjs/stylex';
import { CheckboxStylex } from '@/shared/ui/Checkbox/Checkbox.stylex.ts';
import { ComponentProps } from 'solid-js';

type CheckboxProps = ComponentProps<typeof CheckboxCore> & {};

export const Checkbox = (props: CheckboxProps) => {
    return (
        <CheckboxCore
            {...stylex.props(CheckboxStylex.root)}
            {...props}
        >
            <CheckboxCore.Input {...stylex.props(CheckboxStylex.input)} />
            <CheckboxCore.Control {...stylex.props(CheckboxStylex.control)}>
                <CheckboxCore.Indicator {...stylex.props(CheckboxStylex.indicator)}>Ик</CheckboxCore.Indicator>
            </CheckboxCore.Control>
            <CheckboxCore.Label {...stylex.props(CheckboxStylex.label)}>Subscribe</CheckboxCore.Label>
        </CheckboxCore>
    );
};
