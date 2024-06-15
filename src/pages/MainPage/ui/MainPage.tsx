import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher.tsx';
import { Button } from '@/shared/ui/Button';
import { useI18n } from '@/shared/hooks/i18n.ts';
import { A } from '@solidjs/router';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Switch } from '@/shared/ui/Switch';

const MainPage = () => {
    const [t, { locale }] = useI18n();

    return (
        <div>
            <Button onClick={() => locale('ru')}>ru</Button>
            <Button onClick={() => locale('en')}>en</Button>
            <A href={'/'}>{t('menu.Main')} </A>
            <A href={'/settings'}>{t('menu.Main')} </A>
            <A href={'/profile'}>{t('menu.Profile')} </A>
            <ThemeSwitcher />
            <div style={{ display: 'grid', gap: '1rem', margin: '1rem' }}>
                <Checkbox
                    label={'Пункт 1'}
                    color={'primary'}
                />
                <Checkbox
                    label={'Пункт 2'}
                    color={'danger'}
                />
                <Checkbox
                    label={'Пункт 3'}
                    color={'error'}
                />
                <Checkbox
                    label={'Пункт 4'}
                    color={'warning'}
                />
                <Checkbox
                    label={'Пункт 5'}
                    color={'info'}
                />
                <Checkbox
                    label={'Пункт 6'}
                    color={'success'}
                />
            </div>
            <div style={{ display: 'grid', gap: '1rem', margin: '1rem' }}>
                <Switch
                    color={'primary'}
                    size={'small'}
                    label={'Пункт 1'}
                />
                <Switch
                    color={'danger'}
                    size={'medium'}
                    label={'Пункт 2'}
                />
                <Switch
                    color={'error'}
                    size={'large'}
                    label={'Пункт 3'}
                />
                <Switch
                    color={'warning'}
                    label={'Пункт 4'}
                    disabled
                />
                <Switch
                    color={'info'}
                    label={'Пункт 5'}
                />
                <Switch
                    color={'success'}
                    label={'Пункт 6'}
                />
            </div>
        </div>
    );
};

export default MainPage;
