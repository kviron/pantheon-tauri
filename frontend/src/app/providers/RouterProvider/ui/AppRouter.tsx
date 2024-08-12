import { routeConfig } from '../config/routeConfig';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { ErrorPage } from '@/pages/ErrorPage';
import { Suspense } from 'react';

const AppRouter = () => {
    const router = createHashRouter(
        createRoutesFromElements(
            <Route
                path='/'
                errorElement={<ErrorPage />}
                element={<MainLayout />}
            >
                {Object.values(routeConfig).map(route => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<Suspense fallback={<div>загрузка...</div>}>{route.element}</Suspense>}
                    />
                ))}
            </Route>,
        ),
    );

    return (
        <RouterProvider
            router={router}
            fallbackElement={<p>Loading...</p>}
        />
    );
};

export default AppRouter;
