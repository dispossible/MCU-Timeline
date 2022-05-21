import { EpisodeData, ShowType, TVShowData } from "../data.types";
import { markdown, writeShortDate } from "../utils";
import Show from "./show";

export default class Episode extends Show {
    episodeName: string;
    season: number;
    episode: number;
    episodeNotes?: string;

    constructor(show: TVShowData, episode: EpisodeData) {
        if (episode.releaseDate) {
            episode.releaseDate.push(episode.episode);
        }

        super({
            name: show.name,
            releaseDate: episode.releaseDate,
            watchOrder: episode.watchOrder,
            chronologicalOrder: episode.chronologicalOrder,
            notes: show.notes,
            type: ShowType.FILM, // We will fix this in a sec
            phase: show.phase,
            img: show.img,
        });

        this.type = show.type; // Told ya

        this.episodeName = episode.title;
        this.season = episode.season;
        this.episode = episode.episode;
        this.episodeNotes = episode.notes;
    }

    renderAdditionalHeadings(): string {
        return `<small class="timeline-subTitle"> Season ${this.season} </small>`;
    }

    static renderList(episodes: Episode[]): string {
        return `<div class="timeline-eps">
            <h3 class="timeline-epsTitle">Episodes</h3>
            <ol class="timeline-epList">
                ${episodes.map((ep) => ep.renderEpisode()).join("")}
            </ol>
        </div>`;
    }

    renderEpisode(): string {
        return `<li class="timeline-ep ${!this.released ? "is-unreleased" : ""}">
                <span class="timeline-epNum"> ${this.episode} </span>
                <span class="timeline-epName">
                    ${this.episodeName}
                    ${
                        this.episodeNotes
                            ? `<div class="timeline-notes timeline-notes_episode">${markdown(this.episodeNotes)}</div>`
                            : ``
                    }
                </span>
                <time class="timeline-release"> ${this.releaseDate ? writeShortDate(this.releaseDate) : "-"} </time>
            </li>`;
    }
}
