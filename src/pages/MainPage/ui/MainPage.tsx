import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher.tsx';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Switch } from '@/shared/ui/Switch';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { LangSwitcher } from '@/features/LangSwitcher';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <LangSwitcher short />
            <AppLink href={'/'}>{t('Главная')} </AppLink>
            <AppLink href={'/settings'}>{t('Настройки')} </AppLink>
            <AppLink href={'/profile'}>{t('Профиль')} </AppLink>
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
