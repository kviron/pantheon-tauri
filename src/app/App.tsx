import { MainLayout } from '@/shared/layouts/MainLayout';
import { Component, JSX } from 'solid-js';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider.tsx';
import { I18nProvider } from '@/app/providers/I18nProvider';
import EN from '../../public/locales/en.json';
import RU from '../../public/locales/ru.json';

type AppProps = {
    children: JSX.Element;
};

const App: Component<AppProps> = props => {
    return (
        <ErrorBoundary>
            <ThemeProvider>
                <I18nProvider
                    locale={'ru'}
                    dict={{
                        ru: RU,
                        en: EN,
                    }}
                >
                    <MainLayout
                        header={'header'}
                        sidebar={<div>sidebar</div>}
                    >
                        {props.children}
                    </MainLayout>
                </I18nProvider>
            </ThemeProvider>
        </ErrorBoundary>
    );
};

export default App;
