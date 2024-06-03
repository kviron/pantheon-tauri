/* @refresh reload */
import { render } from 'solid-js/web';
import App from './app/App.tsx';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider.tsx';

render(
    () => (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    ),
    document.getElementById('root') as HTMLElement,
);
