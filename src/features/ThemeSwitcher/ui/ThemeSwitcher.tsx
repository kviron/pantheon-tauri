import { useTheme } from '@/shared/hooks/useTheme.ts';
import { Button } from '@/shared/ui/Button';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    const onToggleHandler = () => {
        toggleTheme();
    };

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button
                onClick={onToggleHandler}
                size={'small'}
                variant={'outlined'}
                color={'primary'}
            >
                Переключить тему
            </Button>
        </div>
    );
};
