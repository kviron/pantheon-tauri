import { useTheme } from '@/shared/hooks/useTheme.ts';
import { Button } from '@/shared/ui/Button';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    const onToggleHandler = () => {
        toggleTheme(newTheme => {
            document.body.className = newTheme === 'light' ? 'app_theme_light' : 'app_theme_dark';
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        });
    };

    return (
        <div>
            <Button onClick={onToggleHandler}>Тема: {theme()}</Button>
        </div>
    );
};
