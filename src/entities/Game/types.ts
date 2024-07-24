import { Entity, Genre } from '@/shared/types/entity';
import { FileImage, OS } from '@/shared/types/common';

export interface GameSystemRequirements {
    /** Процессор */
    cpu: string;
    /** Видеокарта */
    gpu: string;
    /** Операционная система */
    os: OS;
    /** Оперативная память */
    ram: string;
    /** Размер на диске */
    size: string;
    /** Дополнительно */
    addition: string;
}

export interface Game extends Entity {
    /** Описание игры */
    description: string;
    /** Размер игры в кб */
    size: number;
    /** Поддерживает ли игра моды */
    isModding: boolean;
    /** Логотип игры */
    logo: FileImage;
    /** Галерея изображений */
    gallery: FileImage[];
    /** Разработчик */
    developer: string;
    /** Издатель */
    publisher: string;
    /** Разработчик */
    releaseDate: string;
    /** Рейтинг игры */
    rating: string;
    /** Жанр игры */
    genre: Genre[];
    /** Минимальные системные требования */
    minimalRequirements: GameSystemRequirements;
    /** Рекомендуемые  системные требования */
    recommendedRequirements: GameSystemRequirements;
}
