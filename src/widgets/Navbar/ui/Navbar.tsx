import s from './Navbar.module.scss';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Menu, MenuProps } from 'antd';
import { routeConfig } from '@/app/providers/RouterProvider/config/routeConfig.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/ThemeSwitcher.tsx';
import { useEffect, useState } from 'react';
import { AppRoutes } from '@/shared/const/router.ts';

type MenuItem = Required<MenuProps>['items'][number];

export const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [current, setCurrent] = useState(location.pathname ?? AppRoutes.GAMES);
    const { t } = useTranslation();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoForward = () => {
        navigate(1);
    };

    const items: MenuItem[] = Object.values(routeConfig).map(route => {
        if (route.path && route.isMainMenu) {
            return {
                type: 'item',
                route: route.path,
                key: route.path,
                label: t(`navigate.${route.nameKey}`).toUpperCase(),
            };
        }

        return null;
    });

    const onClick: MenuProps['onClick'] = e => {
        navigate(e.key);
        setCurrent(e.key);
    };

    useEffect(() => {
        if (current !== location.pathname) {
            setCurrent(location.pathname);
        }
    }, [location.pathname]);

    return (
        <div className={s.wrapper}>
            <div className={s.arrows}>
                <Button
                    icon={<ArrowLeftOutlined />}
                    type={'text'}
                    onClick={handleGoBack}
                ></Button>
                <Button
                    icon={<ArrowRightOutlined />}
                    type={'text'}
                    onClick={handleGoForward}
                ></Button>
            </div>
            <div className={s.menu}>
                <Menu
                    mode='horizontal'
                    onClick={onClick}
                    selectedKeys={[current]}
                    className={s.antdMenu}
                    items={items}
                />
            </div>
            <div className={s.tools}>
                <ThemeSwitcher size={'large'} />
            </div>
        </div>
    );
};
