import { useContext } from 'solid-js';
import { ThemeContext } from '@/shared/context/ThemeContext.ts';

export const useTheme = () => {
    return useContext(ThemeContext);
};
