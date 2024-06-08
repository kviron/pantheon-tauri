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
        <div style={{ display: 'flex', gap: '1rem', 'align-items': 'center' }}>
            <Button
                onClick={onToggleHandler}
                size={'small'}
                variant={'text'}
                color={'danger'}
            >
                Тема: {theme()}
            </Button>
            <Button
                onClick={onToggleHandler}
                size={'medium'}
                variant={'filled'}
                color={'danger'}
            >
                Тема: {theme()}
            </Button>
            <Button
                onClick={onToggleHandler}
                size={'large'}
                variant={'outlined'}
                color={'danger'}
            >
                Тема: {theme()}
            </Button>
        </div>
    );
};
