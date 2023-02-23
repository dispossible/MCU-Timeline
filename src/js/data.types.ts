export enum ShowType {
    FILM = "FILM",
    SHORT = "SHORT",
    MCU_TV = "MCU_TV",
    TV = "TV",
    DEFENDERS = "DEFENDERS",
    WEB = "WEB",
}

export enum Phase {
    NONE = "NONE",
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE",
    SIX = "SIX",
}

interface BaseShowData {
    name: string;
    phase: Phase;
    img?: string;
    notes?: string;
}

interface Ordering {
    releaseDate?: ReleaseDate;
    watchOrder: number;
    chronologicalOrder?: number;
}

export type ReleaseDate = [number, string | number, number];

export interface FilmData extends BaseShowData, Ordering {
    type: ShowType.FILM | ShowType.SHORT;
    episodes?: never;
}

export interface EpisodeData extends Ordering {
    season: number;
    episode: number;
    title: string;
    notes?: string;
}

export interface TVShowData extends BaseShowData {
    type: ShowType.MCU_TV | ShowType.TV | ShowType.DEFENDERS | ShowType.WEB;
    episodes: EpisodeData[];
}

export type ShowData = FilmData | TVShowData;

export interface Data {
    shows: ShowData[];
}
