import { useContext } from 'solid-js';
import { I18nContext } from '@/shared/context/i18n.ts';
import { createI18nContext } from '@/shared/config/i18n.tsx';

export const useI18n = (): ReturnType<typeof createI18nContext> => {
    return useContext(I18nContext) as ReturnType<typeof createI18nContext>;
};
