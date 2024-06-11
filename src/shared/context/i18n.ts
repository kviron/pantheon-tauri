import { createContext } from 'solid-js';
import { createI18nContext } from '@/shared/config/i18n.tsx';

export const I18nContext = createContext<ReturnType<typeof createI18nContext>>();
