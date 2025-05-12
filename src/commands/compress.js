import { createReadStream, createWriteStream } from "node:fs";
import { getPath } from "../utils.js";
import { pipeline } from "node:stream/promises";
import { createBrotliCompress } from "node:zlib";

const validate = (args) => {
    return args.length === 2;
}

const execute = async (args) => {
    const sourceFilePath = getPath(args[0])
    const destFilePath = getPath(args[1])

    const input = createReadStream(sourceFilePath)
    const output = createWriteStream(destFilePath);
     await pipeline(
        input,
        createBrotliCompress(),
        output
    )
}

export default {validate, execute}