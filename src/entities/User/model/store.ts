import { UserSchema } from './types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create<UserSchema>()(
    persist(
        set => ({
            _inited: false,
            authData: null,
            setAuthData: authData => {
                set({ authData });
            },
        }),
        { name: 'userStore', version: 1 },
    ),
);
