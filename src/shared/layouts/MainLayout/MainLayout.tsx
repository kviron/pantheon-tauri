import { JSX } from 'solid-js';

interface MainLayoutProps {
    header: JSX.Element;
    children?: JSX.Element;
    sidebar: JSX.Element;
    toolbar?: JSX.Element;
}

export const MainLayout = (props: MainLayoutProps) => {
    return (
        <div>
            <div>{props.children}</div>
            <div>{props.sidebar}</div>
            <div>
                <div>{props.header}</div>
                <div>{props.toolbar}</div>
            </div>
        </div>
    );
};
