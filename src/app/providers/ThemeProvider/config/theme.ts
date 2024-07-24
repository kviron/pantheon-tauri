import { ThemeConfig } from 'antd/es/config-provider/context';
import { Theme } from '@tauri-apps/api/window';
import { theme as AntdTheme } from 'antd';
import { mergeDeep } from 'immutable';

const baseConfig: ThemeConfig = {
    token: {
        colorPrimary: '#ff4400',
    },
    components: {
        Layout: {
            headerHeight: 50,
            headerPadding: 0,
            siderBg: '#fff',
        },
    },
    cssVar: true,
    hashed: false,
};

const darkThemeConfig: ThemeConfig = {
    algorithm: AntdTheme.darkAlgorithm,
    token: {
        colorBgContainer: '#2b2b30',
        colorBgLayout: '#202023',
    },
    components: {
        Layout: {
            siderBg: '#2b2b30',
        },
    },
};

export type PantheonTheme = typeof baseConfig;

export const getThemeConfig = (theme: Theme): ThemeConfig => {
    const lightTheme = { ...baseConfig };
    const darkTheme = mergeDeep(baseConfig, { ...darkThemeConfig });

    switch (theme) {
        case 'dark':
            return darkTheme;
        case 'light':
            return lightTheme;
    }
};
