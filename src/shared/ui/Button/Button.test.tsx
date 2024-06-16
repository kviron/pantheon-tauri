import { render } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import { Button } from './Button';

describe('Button', async () => {
    test('Первый тест', () => {
        const { getByText } = render(() => <Button>Кнопка</Button>);
        expect(getByText('Кнопка').innerHTML).toBe('Кнопка');
    });
});
