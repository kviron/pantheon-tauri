import * as stylex from '@stylexjs/stylex';
import { ButtonSize } from './Button.tsx';

export const ButtonStylex = stylex.create({
    root: {
        backgroundColor: {
            ':hover': 'blue',
            ':active': 'darkblue',
            ':disabled': 'red',
        },
    },
    fullWidth: {
        width: '100%',
    },
    size: (size: NotRequired<ButtonSize>) => ({
        height: size === 'small' ? 20 : size === 'large' ? 40 : 30,
    }),
});
