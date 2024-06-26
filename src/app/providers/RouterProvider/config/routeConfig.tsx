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
    getRouteGames,
    getRouteGameDetails,
    getRouteLibrary,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';
import { GamesPage } from '@/pages/GamesPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
        nameKey: AppRoutes.MAIN,
        isMainMenu: false,
    },
    [AppRoutes.GAMES]: {
        path: getRouteGames(),
        nameKey: AppRoutes.GAMES,
        element: <GamesPage />,
        isMainMenu: true,
    },
    [AppRoutes.LIBRARY]: {
        path: getRouteLibrary(),
        nameKey: AppRoutes.LIBRARY,
        element: <div>Страница библиотеки</div>,
        isMainMenu: true,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
        isMainMenu: true,
        nameKey: AppRoutes.SETTINGS,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        nameKey: AppRoutes.PROFILE,
        authOnly: true,
        isMainMenu: false,
    },
    [AppRoutes.GAME_DETAILS]: {
        path: getRouteGameDetails(':id'),
        nameKey: AppRoutes.GAME_DETAILS,
        element: <div>игра</div>,
        isMainMenu: false,
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
        nameKey: AppRoutes.FORBIDDEN,
        isMainMenu: false,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
        nameKey: AppRoutes.NOT_FOUND,
        isMainMenu: false,
    },
};
