import { routeConfig } from '@/app/providers/RouterProvider/config/routeConfig.tsx';
import { A } from '@solidjs/router';
import useI18n from '@/shared/hooks/i18n.ts';

export const Navbar = () => {
    const { t } = useI18n();

    return (
        <div>
            {Object.values(routeConfig).map(route => {
                if (route.name && route.path && typeof route.path === 'string') {
                    return <A href={route.path}>{route.name}</A>;
                }
            })}
        </div>
    );
};
