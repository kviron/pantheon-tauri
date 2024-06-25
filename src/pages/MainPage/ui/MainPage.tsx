import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button, message } from 'antd';

const MainPage = () => {
    const { t } = useTranslation();

    const showMessage = () => {
        message.success('sdsdsdsssssssss');
    };

    return (
        <div>
            <LangSwitcher short />
            <AppLink href={'/'}>{t('navigate.main')} </AppLink>
            <AppLink href={'/settings'}>{t('navigate.settings')} </AppLink>
            <AppLink href={'/profile'}>{t('navigate.profile')} </AppLink>
            <Button onClick={showMessage}>Сообщение</Button>
        </div>
    );
};

export default MainPage;
