import { JSX } from 'solid-js';
import { ErrorBoundary as ErrorBoundarySolid } from 'solid-js';

type ErrorBoundaryProps = {
    children: JSX.Element;
};

export const ErrorBoundary = (props: ErrorBoundaryProps) => {
    return (
        <ErrorBoundarySolid fallback={<div>Something went terribly wrong</div>}>{props.children}</ErrorBoundarySolid>
    );
};
