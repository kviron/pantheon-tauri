/* @refresh reload */
import 'reset-css';
import '@/app/styles/index.scss';
import { render } from 'solid-js/web';
import App from './app/App.tsx';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider.tsx';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';

render(
    () => (
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    ),
    document.getElementById('root') as HTMLElement,
);
