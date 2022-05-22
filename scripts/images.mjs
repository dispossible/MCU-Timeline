import fs from "fs";

fs.cpSync("./src/img", "./dist/img", { recursive: true });
