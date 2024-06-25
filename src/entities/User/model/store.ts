import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { UserSchema } from './types';
import { create } from 'zustand';

export const useUserStore = create<UserSchema>(set => ({
    _inited: false,
    authData: null,
    setAuthData: authData => {
        localStorage.setItem(USER_LOCALSTORAGE_KEY, authData.id);
        set({ authData });
    },
}));
