import * as stylex from '@stylexjs/stylex';

export const CheckboxStylex = stylex.create({
    root: {
        minHeight: 40,
        backgroundColor: {
            ':hover': 'blue',
            ':active': 'darkblue',
            ':disabled': 'red',
        },
    },
    input: {
        width: '100%',
    },
    control: {
        backgroundColor: 'red',
    },
    indicator: {
        backgroundColor: 'red',
    },
    label: {
        color: 'white',
    },
});
