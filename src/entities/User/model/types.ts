import { UserRole } from './const.ts';
import { Theme } from '@tauri-apps/api/window';

export interface JsonSettings {
    theme?: Theme;
    isFirstVisit?: boolean;
}

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData: Nullable<User>;
    setAuthData: (data: User) => void;

    _inited: boolean;
}
