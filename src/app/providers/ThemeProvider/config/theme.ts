import { ThemeConfig } from 'antd/es/config-provider/context';
import { Theme } from '@tauri-apps/api/window';
import { theme as AntdTheme } from 'antd';

const baseConfig: ThemeConfig = {
    token: {},
    components: {
        Layout: {
            headerHeight: 45,
            headerPadding: 0,
        },
    },
    cssVar: true,
};

export const getThemeConfig = (theme: Theme): ThemeConfig => {
    if (theme === 'dark') {
        return {
            ...baseConfig,
            algorithm: AntdTheme.darkAlgorithm,
        };
    }

    return {
        ...baseConfig,
    };
};
