import { MainLayout } from '@/shared/layouts/MainLayout';
import { A } from '@solidjs/router';
import { Component, JSX } from 'solid-js';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider.tsx';
import { routeConfig } from '@/app/providers/RouterProvider/config/routeConfig.tsx';

type AppProps = {
    children: JSX.Element;
};

const App: Component<AppProps> = props => {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <MainLayout
                    header={'header'}
                    sidebar={
                        <div>
                            {Object.values(routeConfig).map(route => {
                                if (route.name && route.path && typeof route.path === 'string') {
                                    return <A href={route.path}>{route.name}</A>;
                                }
                            })}
                        </div>
                    }
                >
                    {props.children}
                </MainLayout>
            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default App;
