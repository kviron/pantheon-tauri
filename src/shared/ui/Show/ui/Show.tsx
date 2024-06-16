import { ReactNode } from 'react';

type ShowProps = {
    children?: ReactNode;
    fallback?: ReactNode;
    when: any;
};

export const Show = (props: ShowProps) => {
    const { children, when, fallback } = props;

    if (!when) {
        return fallback ?? null;
    }

    return <>{children}</>;
};
