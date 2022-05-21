import mcuData from "../data";
import { formatPhase, formatShowType, parseData } from "../utils";
import Show from "../objects/show";
import { Phase, ShowType } from "../data.types";
import Episode from "../objects/episode";

const data = parseData(mcuData.shows);

export enum SortOrder {
    WATCH = "WATCH",
    RELEASE = "RELEASE",
    CHRONOLOGICAL = "CHRONOLOGICAL",
}

export enum FilterType {
    SHOW_TYPE = "SHOW_TYPE",
    PHASE = "PHASE",
}

export const defaults = {
    order: SortOrder.WATCH,
    flipOrder: true,
    showTypes: [ShowType.FILM, ShowType.SHORT, ShowType.MCU_TV],
    phases: [] as Phase[],
};

export default class Timeline {
    el?: HTMLElement;
    data: Show[];

    order: SortOrder;
    flipOrder: boolean;
    showTypes: ShowType[];
    phases: Phase[];

    constructor(headless: boolean = false) {
        this.data = data;

        //Ctrls
        this.order = defaults.order;
        this.flipOrder = defaults.flipOrder;
        this.showTypes = defaults.showTypes;
        this.phases = defaults.phases;

        if (!headless) {
            this.el = document.querySelector("[data-timeline]") as HTMLElement;
            this.bindControls();

            this.sort();
            this.render();
        }
    }

    bindControls() {
        const filterGroups = document.querySelectorAll<HTMLElement>("[data-filter-list]");
        filterGroups.forEach((filterGroup) => {
            filterGroup.addEventListener("change", (e) => {
                const target = (e.target as HTMLElement).closest("[data-filter]") as HTMLInputElement;
                const filter = target.getAttribute("name") as FilterType;

                const applyFilter = <T>(filterSet: T[], filterValue: T, add: boolean) => {
                    if (add && !filterSet.includes(filterValue)) {
                        filterSet.push(filterValue);
                        window.gtag("event", `Toggle ${filter}`, { event_label: `${filterValue} on` });
                    } else if (!add && filterSet.includes(filterValue)) {
                        filterSet = filterSet.filter((val) => val !== filterValue);
                        window.gtag("event", `Toggle ${filter}`, { event_label: `${filterValue} off` });
                    }
                    return filterSet;
                };

                if (filter === FilterType.PHASE) {
                    let value = target.getAttribute("value") as Phase;
                    this.phases = applyFilter(this.phases, value, target.checked);
                } else if (filter === FilterType.SHOW_TYPE) {
                    let value = target.getAttribute("value") as ShowType;
                    this.showTypes = applyFilter(this.showTypes, value, target.checked);
                }

                this.sort();
                this.render();
            });
        });

        const sort = document.querySelector("[data-sort]");
        if (sort) {
            sort.addEventListener("change", (e) => {
                this.order = (e.target as HTMLSelectElement).value as SortOrder;
                window.gtag("event", "Change sort type", { event_label: this.order });
                this.sort();
                this.render();
            });
        }

        const flip = document.querySelector("[data-flip]");
        if (flip) {
            flip.addEventListener("click", (e) => {
                this.flipOrder = !this.flipOrder;

                if (!this.flipOrder) flip.classList.add("is-flipped");
                else flip.classList.remove("is-flipped");

                const text = flip.querySelector("[data-flip-text]") as HTMLElement;
                if (text) {
                    const t1 = text.dataset.flipText;
                    const t2 = text.innerText;
                    text.dataset.flipText = t2;
                    text.innerText = t1 ?? "";
                }

                window.gtag("event", "Flip sort order", {
                    event_label: this.flipOrder ? "Newest first" : "Oldest first",
                });

                this.sort();
                this.render();
            });
        }

        const clears = document.querySelectorAll("[data-filter-clear]");
        clears.forEach((clear) => {
            const type = clear.getAttribute("data-filter-clear") as FilterType;
            clear.addEventListener("click", (e) => {
                if (type === FilterType.PHASE) {
                    this.phases = [];
                } else if (type === FilterType.SHOW_TYPE) {
                    this.showTypes = [];
                }

                (
                    document
                        .querySelector(`[data-filter-list='${type}']`)
                        ?.querySelectorAll("[data-filter]") as NodeListOf<HTMLInputElement>
                ).forEach((filter) => {
                    filter.checked = false;
                });

                this.sort();
                this.render();
            });
        });

        this.el!.addEventListener(
            "error",
            (e) => {
                const target = e.target as HTMLElement;
                if (target.tagName === "IMG") {
                    target.remove();
                }
            },
            true
        );
    }

    sort() {
        const sortedData = [...this.data];
        if (this.order === SortOrder.RELEASE) {
            sortedData.sort((a, b) => {
                if (a.releaseDate === b.releaseDate) {
                    return a.order - b.order;
                }
                if (!a.releaseDate && b.releaseDate) return 1;
                if (a.releaseDate && !b.releaseDate) return -1;
                if (!a.releaseDate && !b.releaseDate) return 0;
                return a.releaseDate!.getTime() - b.releaseDate!.getTime();
            });
        } else if (this.order === SortOrder.WATCH) {
            sortedData.sort((a, b) => {
                return a.order - b.order;
            });
        } else if (this.order === SortOrder.CHRONOLOGICAL) {
            sortedData.sort((a, b) => {
                return a.chronologicalOrder - b.chronologicalOrder;
            });
        }

        if (this.flipOrder) {
            sortedData.reverse();
        }

        this.data = sortedData;
    }

    render() {
        const list = this.renderData();
        const emptyEl = document.querySelector("[data-empty]") as HTMLElement;
        if (list.length < 1) {
            emptyEl.style.display = "";
        } else {
            emptyEl.style.display = "none";
        }
        this.el!.innerHTML = list;
    }

    renderData() {
        const showList: (Show | Episode[])[] = [];

        this.data.forEach((show) => {
            if (!show.isVisible(this.phases, this.showTypes)) return;
            if (show instanceof Episode) {
                if (Array.isArray(showList[showList.length - 1])) {
                    const showSubList = showList[showList.length - 1] as Episode[];
                    if (showSubList[0]?.name === show.name && showSubList[0]?.season === show.season) {
                        showSubList.push(show);
                    } else {
                        showList.push([show]);
                    }
                } else {
                    showList.push([show]);
                }
            } else {
                showList.push(show);
            }
        });

        return showList
            .map((show, i) => {
                var index = this.flipOrder ? showList.length - i : i + 1;
                if (Array.isArray(show)) {
                    const released = !!show.find((ep) => ep.released);
                    return show[0].render(index, Episode.renderList(show), released);
                }
                return show.render(index);
            })
            .join("");
    }

    buildFilterList(type: FilterType) {
        const buildList = <T>(values: T[], selected: T[], formatName: (value: T) => string) =>
            values
                .map(
                    (value) =>
                        `<li>
                        <label class="filters-btn" for="${type}:${value}">
                            <input 
                                type="checkbox"
                                data-filter name="${type}"
                                value="${value}"
                                id="${type}:${value}"
                                ${selected.includes(value) ? 'checked="checked"' : ""}
                            >
                            <span>${formatName(value)}</span>
                        </label>
                    </li>`
                )
                .join(``);

        if (type === FilterType.PHASE) {
            return buildList(Object.values(Phase), this.phases, formatPhase);
        }
        if (type === FilterType.SHOW_TYPE) {
            return buildList(Object.values(ShowType), this.showTypes, formatShowType);
        }
    }
}
