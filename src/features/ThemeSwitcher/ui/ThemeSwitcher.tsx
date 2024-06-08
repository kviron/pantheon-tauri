import { useTheme } from '@/shared/hooks/useTheme.ts';
import { Button } from '@/shared/ui/Button';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage.ts';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

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
                color={'warning'}
            >
                Кнопка
            </Button>
            <Button
                onClick={onToggleHandler}
                size={'medium'}
                variant={'filled'}
                color={'warning'}
            >
                Кнопка
            </Button>
            <Button
                onClick={onToggleHandler}
                size={'large'}
                variant={'outlined'}
                color={'warning'}
            >
                Кнопка
            </Button>
        </div>
    );
};
