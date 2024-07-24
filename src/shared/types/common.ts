export interface File {
    path: string;
}

export interface FileImage extends File {
    /** Alt текст картинки */
    alt: Nullable<string>;
    /** Title текст картинки */
    title: Nullable<string>;
}

export enum OS {
    Windows = 'Windows',
    MacOS = 'MacOS',
    linux = 'Linux',
}
