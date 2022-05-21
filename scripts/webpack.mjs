import webpack from "webpack";
import config from "../webpack.config.js";

webpack(config, (err, stats) => {
    if (err || stats.hasErrors()) {
        console.error(err ?? stats.err);
        console.error(stats.toJson("minimal"));
    }
    console.log("Webpack completed");
});
