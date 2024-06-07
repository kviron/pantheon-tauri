import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/hooks/useTheme.ts';

function App() {
    const { toggleTheme } = useTheme();
    return (
        <div class='container'>
            Главная страница{' '}
            <Button
                variant={'filled'}
                onClick={() => {
                    toggleTheme();
                }}
            >
                Кнопка
            </Button>
        </div>
    );
}

export default App;
