import { MainLayout } from '@/shared/layouts/MainLayout';
import AppRouter from '@/app/providers/RouterProvider/ui/AppRouter.tsx';
import { Suspense } from 'react';

const App = () => {
    return (
        <Suspense fallback=''>
            <MainLayout
                header={<div>header</div>}
                sidebar={<div>sidebar</div>}
            >
                <AppRouter />
            </MainLayout>
        </Suspense>
    );
};

export default App;
