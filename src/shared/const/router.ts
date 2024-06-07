export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    PROFILE = 'profile',
    APPS = 'apps',
    APP_DETAILS = 'app_details',
    FORBIDDEN = 'forbidden',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteApps = () => '/apps';
export const getRouteAppDetails = (id: string) => `/app/${id}`;
export const getRouteForbidden = () => '/forbidden';
export const getRouteProfile = (id: string) => `/profile/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteApps()]: AppRoutes.APPS,
    [getRouteAppDetails(':id')]: AppRoutes.APP_DETAILS,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
