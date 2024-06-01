import styles from './Checkbox.module.scss';
import { ComponentProps } from 'solid-js';

type CheckboxProps = ComponentProps<any> & {};

export const Checkbox = (props: CheckboxProps) => {
    return (
        <div
            class={styles.checkbox}
            {...props}
        />
    );
};
