import { createReadStream, createWriteStream } from "node:fs";
import { getPath } from "../utils.js";
import path from "path"
import { pipeline } from "node:stream/promises";

const validate = (args) => {
    return args.length === 2;
}

const execute = async (args) => {
    const sourceFilePath = getPath(args[0])
    const destFilePath = path.join(getPath(args[1]), args[0])

    const readable = createReadStream(sourceFilePath)
    const writable = createWriteStream(destFilePath);
    await pipeline(readable, writable)
}

export default {validate, execute}