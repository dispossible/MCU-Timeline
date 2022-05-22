const { default: Timeline, FilterType } = require("../.temp/components/timeline");
const fs = require("fs");

console.log("Rendering HTML...");

const timeline = new Timeline(true);

const srcHtml = fs.readFileSync("./src/index.html", { encoding: "utf-8" });

let html = srcHtml
    .replace("{{prerenderList}}", timeline.renderData())
    .replace("{{prerenderPhase}}", timeline.buildFilterList(FilterType.PHASE))
    .replace("{{prerenderType}}", timeline.buildFilterList(FilterType.SHOW_TYPE));

fs.writeFileSync("./dist/index.html", html, { encoding: "utf-8" });

console.log("Rendering HTML complete");
