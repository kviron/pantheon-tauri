import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import {
    AppRoutes,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
    getRouteSettings,
    getRouteApps,
    getRouteAppDetails,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';
import { AppDetailsPage } from '@/pages/AppDetailsPage';
import { AppsPage } from '@/pages/AppsPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        component: MainPage,
        name: 'Главная',
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        component: SettingsPage,
        name: 'Настройки',
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        component: ProfilePage,
        name: 'Профиль',
        authOnly: true,
    },
    [AppRoutes.APPS]: {
        path: getRouteApps(),
        component: AppsPage,
        name: 'Игры',
    },
    [AppRoutes.APP_DETAILS]: {
        path: getRouteAppDetails(':id'),
        component: AppDetailsPage,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        component: ForbiddenPage,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        component: NotFoundPage,
    },
};
