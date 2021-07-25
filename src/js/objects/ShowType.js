
// Type to names map
export const showNames = {
    FILM: "Film",
    SHORT: "One-Shot",
    MCU_TV: "MCU TV",
    TV: "TV",
    DEFENDERS: "Netfilx Defenders",
    WEB: "Web Show",
};


// Type enum
export default Object.fromEntries(
    Object.entries(showNames)
        .map(([key]) => [key, key])
);