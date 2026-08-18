import { SortOrder } from "./components/timeline";
import { FilmData, Phase, ReleaseDate, ShowData, ShowType, TVShowData } from "./data.types";
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

const monthsA = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthsB = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function parseDate(input: [...ReleaseDate, number?]): Date {
    if (input.length < 3 || input.length > 4) {
        throw new Error(`Unknown date format: "${input}"`);
    }

    let month = input[1];

    if (typeof month === "string") {
        if (monthsA.includes(month)) {
            month = monthsA.indexOf(month);
        } else if (monthsB.includes(month)) {
            month = monthsB.indexOf(month);
        } else {
            throw new Error(`Invalid month name: "${month}"`);
        }
    }

    // Episodes pass in their episode number as a 4th value, we use this as minutes to keep episodes
    // that released on the same day in their intended watch order. Technical max of 59 episodes a season.
    return new Date(input[0], month, input[2], 0, input[3] ?? 0, 0, 0);
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
            return "Defenders Saga";
        case ShowType.WEB:
            return "Web Show";
    }
}

export function formatPhase(phase: Phase): string {
    switch (phase) {
        case Phase.NONE:
            return "None";
        case Phase.ONE:
            return "1 - Infinity Saga";
        case Phase.TWO:
            return "2 - Infinity Saga";
        case Phase.THREE:
            return "3 - Infinity Saga";
        case Phase.FOUR:
            return "4 - Multiverse";
        case Phase.FIVE:
            return "5 - Multiverse";
        case Phase.SIX:
            return "6 - Multiverse";
    }
}
