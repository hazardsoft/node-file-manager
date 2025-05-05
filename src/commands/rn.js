import { getPath } from "../utils.js";
import { access, rename, writeFile } from "node:fs/promises";

const validate = (args) => {
    return args.length === 2;
}

const execute = async (args) => {
    const sourceFilePath = getPath(args[0])
    const destFilePath = getPath(args[1])
    
    await access(sourceFilePath)

    try {
        await access(destFilePath);
        // if we got here, then destination file exists already
        throw new Error("FS operation failed");
    } catch(e) {
        // destination file does not exist
        if (e.code === 'ENOENT' && e.path === destFilePath) {
            rename(sourceFilePath, destFilePath);
        } else {
            throw e;
        }
    }
}

export default {validate, execute}