import { EpisodeData, FilmData, Phase, ShowType } from "../data.types";
import { formatShowType, markdown, writeDate } from "../utils";

export default class Show {
    type: ShowType;
    name: string;
    imgName?: string;
    notes?: string;
    phase: Phase;

    releaseDate?: Date;
    order: number;
    chronologicalOrder: number;

    constructor(show: FilmData) {
        let chronologicalOrder = show.chronologicalOrder ?? show.watchOrder;

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        if (show.releaseDate) {
            if (typeof show.releaseDate?.[1] === "string") {
                show.releaseDate[1] = months.indexOf(show.releaseDate[1]);
            }
            this.releaseDate = new Date(...(show.releaseDate as [number, number, number]));
        }

        this.name = show.name;
        this.type = show.type;
        this.order = show.watchOrder;
        this.chronologicalOrder = chronologicalOrder;
        this.imgName = show.img;
        this.notes = show.notes;
        this.phase = show.phase;
    }

    isVisible(phases: Phase[], showTypes: ShowType[]) {
        return (
            (phases.includes(this.phase) || phases.length === 0) &&
            (showTypes.includes(this.type) || showTypes.length === 0)
        );
    }

    get released() {
        if (!this.releaseDate) {
            return false;
        }
        return this.releaseDate.getTime() < Date.now();
    }

    get imgUrl() {
        return this.imgName ? `img/poster/${this.imgName}` : `img/poster/default.jpg`;
    }

    renderAdditionalHeadings(): string {
        if (this.releaseDate) {
            return `<time class="timeline-date">${this.released ? "Released" : "Releases"}: ${writeDate(
                this.releaseDate
            )}</time>`;
        }
        return ``;
    }

    render(index: number, additionalHtml?: string, released?: boolean): string {
        released = released ?? this.released;
        return `<li>
                <div class="timeline-card timeline-card_${this.type} ${!this.released ? "is-unreleased" : ""}">
                    <div class="timeline-posterFrame">
                        <img class="timeline-poster" src="${this.imgUrl}" alt="Poster for ${this.name}"/>
                    </div>
                    <div class="timeline-detail">
                        <div class="timeline-vol"> ${index} </div>
                        <div class="timeline-type"> ${formatShowType(this.type)} </div>
                        <h2 class="timeline-title"> ${this.name} </h2>
                        ${this.renderAdditionalHeadings()}
                        ${this.notes ? `<div class="timeline-notes">${markdown(this.notes)}</div>` : ``}
                        ${additionalHtml ?? ""}
                    </div>
                </div>
            </li>`;
    }
}
