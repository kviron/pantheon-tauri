import { Button } from '@suid/material';
import { createSignal } from 'solid-js';
import { Checkbox } from '@/shared/ui/Checkbox';

function App() {
    const [count, setCount] = createSignal(0);

    const increment = () => setCount(prev => prev + 1);

    return (
        <div
            class='container'
            title={'dvdsv'}
        >
            <span>Count: {count()}</span>
            <br />
            <Button
                onClick={increment}
                size={'small'}
            >
                Кнопка с текстом
            </Button>
            <div>
                <Checkbox>
                    <Checkbox />
                </Checkbox>
            </div>
        </div>
    );
}

export default App;
