import { createSignal } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Locales } from '@/app/types/locales.ts';

function deepReadObject<T = any>(obj: Record<string, unknown>, path: string, defaultValue?: unknown): T {
    const value = path
        .trim()
        .split('.')
        .reduce<any>((a, b) => (a ? a[b] : undefined), obj);

    return value !== undefined ? value : defaultValue;
}

function template(str: string, params: Record<string, string>, reg: RegExp = /{{(.*?)}}/g): string {
    return str.replace(reg, (_, key) => deepReadObject(params, key, ''));
}

export function createI18nContext(
    init: Record<string, Record<string, any>> = {},
    lang: string = navigator.language in init ? navigator.language : Object.keys(init)[0],
): readonly [
    (key: DotNestedKeys<Locales> | string, params?: Record<string, string>, defaultValue?: string) => string,
    {
        add(lang: string, table: Record<string, any>): void;
        locale: (lang?: string) => string;
        dict: (lang: string) => Record<string, Record<string, any>>;
    },
] {
    const [locale, setLocale] = createSignal(lang);
    const [dict, setDict] = createStore(init);

    const translate = (
        key: DotNestedKeys<Locales> | string,
        params?: Record<string, string>,
        defaultValue?: string,
    ): string => {
        const val = deepReadObject(dict[locale()], key, defaultValue || '');
        if (typeof val === 'function') return val(params);
        if (typeof val === 'string') return template(val, params || {});
        return val;
    };

    const actions = {
        add(lang: string, table: Record<string, any>) {
            setDict(lang, t => Object.assign(t || {}, table));
        },
        locale: (lang?: string) => (lang ? setLocale(lang) : locale()),
        dict: (lang: string) => deepReadObject(dict, lang),
    };

    return [translate, actions] as const;
}
