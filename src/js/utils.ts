import { SortOrder } from "./components/timeline";
import { FilmData, Phase, ShowData, ShowType, TVShowData } from "./data.types";
import Episode from "./objects/episode";
import Show from "./objects/show";

export function parseData(input: ShowData[]): Show[] {
    const data: Show[] = [];
    input.forEach((show) => {
        if (Array.isArray(show.episodes)) {
            show.episodes.forEach((episode) => {
                data.push(new Episode(show as TVShowData, episode));
            });
        } else {
            data.push(new Show(show as FilmData));
        }
    });
    return data;
}

export function writeDate(date: Date) {
    const month = new Intl.DateTimeFormat(undefined, { month: "long" }).format(date);

    let suffix = "th";
    if (date.getDate() % 10 === 1 && date.getDate() !== 11) suffix = "st";
    if (date.getDate() % 10 === 2 && date.getDate() !== 12) suffix = "nd";
    if (date.getDate() % 10 === 3 && date.getDate() !== 13) suffix = "rd";

    return date.getDate() + "<sup>" + suffix + "</sup> " + month + " " + date.getFullYear();
}

export function writeShortDate(date: Date) {
    return new Intl.DateTimeFormat().format(date);
}

export function sortData(data: Show[], order: SortOrder, flipOrder: boolean) {
    if (order === SortOrder.RELEASE) {
        data.sort((a, b) => {
            if (a.releaseDate === b.releaseDate) {
                return a.order - b.order;
            }
            if (!a.releaseDate && b.releaseDate) return 1;
            if (a.releaseDate && !b.releaseDate) return -1;
            if (!a.releaseDate && !b.releaseDate) return 0;
            return a.releaseDate!.getTime() - b.releaseDate!.getTime();
        });
    } else if (order === SortOrder.WATCH) {
        data.sort((a, b) => {
            return a.order - b.order;
        });
    } else if (order === SortOrder.CHRONOLOGICAL) {
        data.sort((a, b) => {
            return a.chronologicalOrder - b.chronologicalOrder;
        });
    }

    if (flipOrder) {
        data.reverse();
    }

    return data;
}

export function markdown(text: string) {
    return text.replace(/\*([^\*]*?)\*/, "<strong>$1</strong>");
}

export function formatShowType(type: ShowType): string {
    switch (type) {
        case ShowType.FILM:
            return "Film";
        case ShowType.SHORT:
            return "One-Shot";
        case ShowType.MCU_TV:
            return "MCU TV";
        case ShowType.TV:
            return "TV";
        case ShowType.DEFENDERS:
            return "Netflix Defenders";
        case ShowType.WEB:
            return "Web Show";
    }
}

export function formatPhase(phase: Phase): string {
    switch (phase) {
        case Phase.NONE:
            return "None";
        case Phase.ONE:
            return "1";
        case Phase.TWO:
            return "2";
        case Phase.THREE:
            return "3";
        case Phase.FOUR:
            return "4";
        case Phase.FIVE:
            return "5";
    }
}
