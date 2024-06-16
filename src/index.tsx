/* @refresh reload */
import 'reset-css';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import App from '@/app/App.tsx';
import { StrictMode } from 'react';
import { StoreProvider } from '@/app/providers/StoreProvider';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден. НЕ удалось вмонтировать реакт приложение');
}

const root = createRoot(container);

root.render(
    <StrictMode>
        <HashRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </StoreProvider>
        </HashRouter>
    </StrictMode>,
);
