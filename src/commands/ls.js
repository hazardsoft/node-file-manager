import { cwd } from "node:process"
import { readdir, stat } from "node:fs/promises";

const validate = (args) => {
    return !args.length;
}

const execute = async () => {
    const curDir = cwd()
    const allFiles = await readdir(curDir);

    const formattedFiles = []
    for (const file of allFiles) {
        
        formattedFiles.push({
            "Name": file,
            "Type": (await stat(file)).isDirectory() ? "directory" : "file"
        })
    }
    formattedFiles.sort((a, b) => {
        if (a.Type === "directory" && b.Type === "file") {
            return -1
        }
        if (a.Type === "file" && b.Type === "directory") {
            return 1
        }
        return a.Name.localeCompare(b.Name)
    })
    console.table(formattedFiles)
}

export default {validate, execute}