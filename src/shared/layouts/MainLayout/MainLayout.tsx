import { Outlet } from 'react-router-dom';
import { Navbar } from '@/widgets/Navbar';
import s from './MainLayout.module.scss';
import cl from 'classnames';

export const MainLayout = () => {
    return (
        <div className={cl(s.wrapper, 'App')}>
            <Navbar />
            <div className={s.content}>
                <Outlet />
            </div>
        </div>
    );
};
