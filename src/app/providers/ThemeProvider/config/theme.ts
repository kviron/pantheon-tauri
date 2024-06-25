import { ThemeConfig } from 'antd/es/config-provider/context';
import { Theme } from '@tauri-apps/api/window';
import { theme as AntdTheme } from 'antd';

const baseConfig: ThemeConfig = {
    token: {},
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
        algorithm: AntdTheme.defaultAlgorithm,
    };
};
