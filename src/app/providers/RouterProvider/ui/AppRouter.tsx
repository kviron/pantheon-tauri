import { routeConfig } from '../config/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { Suspense, useCallback } from 'react';
import { AppRoutesProps } from '@/shared/types/router.ts';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<div>...загрузка</div>}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
