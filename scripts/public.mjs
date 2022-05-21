import fs from "fs";

const addPath = (path, fileName) => path + (fileName ? "/" + fileName : "");

function copyFolder(basePath, subPath, distPath) {
    const folderPath = addPath(basePath, subPath);
    const distFolderPath = addPath(distPath, subPath);
    const fileList = fs.readdirSync(folderPath);

    const distExists = fs.existsSync(distPath);
    if (!distExists) {
        fs.mkdirSync(distPath);
    }

    fileList.forEach((fileName) => {
        const filePath = addPath(folderPath, fileName);
        const distFilePath = addPath(distFolderPath, fileName);
        const fileStats = fs.statSync(filePath);

        if (fileStats.isDirectory()) {
            const subFolderPath = filePath;
            const distSubFolderPath = distFilePath;

            const distExists = fs.existsSync(distSubFolderPath);
            if (!distExists) {
                fs.mkdirSync(distSubFolderPath);
            }
            copyFolder(basePath, subFolderPath, distPath);
        } else if (fileStats.isFile()) {
            fs.copyFileSync(filePath, distFilePath);
        }
    });
}

copyFolder("./src/public", null, "./dist");
