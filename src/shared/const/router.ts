export enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    PROFILE = 'profile',
    GAMES = 'games',
    GAME_DETAILS = 'game_details',
    FORBIDDEN = 'forbidden',
    LIBRARY = 'library',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteGames = () => '/games';
export const getRouteGameDetails = (id: string) => `/game/${id}`;
export const getRouteLibrary = () => '/library';
export const getRouteForbidden = () => '/forbidden';
export const getRouteProfile = (id: string) => `/profile/${id}`;

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
    [getRouteMain()]: AppRoutes.MAIN,
    [getRouteSettings()]: AppRoutes.SETTINGS,
    [getRouteProfile(':id')]: AppRoutes.PROFILE,
    [getRouteGames()]: AppRoutes.GAMES,
    [getRouteLibrary()]: AppRoutes.LIBRARY,
    [getRouteGameDetails(':id')]: AppRoutes.GAME_DETAILS,
    [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
