export interface Entity {
    /** Унификатор */
    id: UUID;
    /** Название */
    name: string;
    /** Дата добавления */
    createDate: string;
    /** Дата обновления */
    updateDate: string;
}

export interface Genre extends Entity {}
