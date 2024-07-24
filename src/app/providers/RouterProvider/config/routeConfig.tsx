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
    getRouteDownLoads,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';
import { LibraryPage } from '@/pages/LibraryPage/ui/Page/LibraryPage.tsx';

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
        element: <div>Игры</div>,
        isMainMenu: true,
    },
    [AppRoutes.LIBRARY]: {
        path: getRouteLibrary(),
        nameKey: AppRoutes.LIBRARY,
        element: <LibraryPage />,
        isMainMenu: true,
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage />,
        isMainMenu: true,
        nameKey: AppRoutes.SETTINGS,
    },
    [AppRoutes.Downloads]: {
        path: getRouteDownLoads(),
        element: <div>Загрузки</div>,
        isMainMenu: false,
        nameKey: AppRoutes.Downloads,
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
