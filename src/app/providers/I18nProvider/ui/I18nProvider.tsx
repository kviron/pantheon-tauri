import { Component, JSX } from 'solid-js';
import { createI18nContext } from '@/shared/config/i18n';
import { I18nContext } from '@/shared/context/i18n';

export const I18nProvider: Component<{
    dict?: Record<string, Record<string, any>>;
    locale?: string;
    children?: JSX.Element;
}> = props => {
    const value = createI18nContext(props.dict, props.locale);

    return <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>;
};
