import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPath } from "../utils.js";

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    const filePath = getPath(args[0])
    const readable = createReadStream(filePath);
    await pipeline(readable, process.stdout)
}

export default {validate, execute}