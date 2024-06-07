/* @refresh reload */
import 'reset-css';
import '@/app/styles/index.scss';
import { render } from 'solid-js/web';
import App from './app/App.tsx';
import AppRouter from '@/app/providers/RouterProvider/ui/AppRouter.tsx';

render(() => <AppRouter root={App} />, document.getElementById('root') as HTMLElement);
