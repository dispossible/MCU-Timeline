import fs from "fs";

const addPath = (path, fileName) => path + (fileName ? "/" + fileName : "");

export default function copyFolder(basePath, subPath, distPath) {
    const folderPath = addPath(basePath, subPath);
    const distFolderPath = addPath(distPath, subPath);
    const fileList = fs.readdirSync(folderPath);

    const distParts = distPath.replace(/^\.\//, "").split("/");
    distParts.reduce((path, folder) => {
        path = addPath(path, folder);
        const distExists = fs.existsSync(path);
        if (!distExists) {
            fs.mkdirSync(path);
        }
        return path;
    }, ".");

    fileList.forEach((fileName) => {
        const filePath = addPath(folderPath, fileName);
        const distFilePath = addPath(distFolderPath, fileName);
        const fileStats = fs.statSync(filePath);

        if (fileStats.isDirectory()) {
            const subFolderPath = filePath.replace(basePath + "/", "");
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
