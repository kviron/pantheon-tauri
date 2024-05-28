import { render, screen } from '@solidjs/testing-library';
import { Button } from './Button';

describe('Button', () => {
    test('Первый тест', () => {
        render(() => <Button>Кнопка проверка</Button>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
