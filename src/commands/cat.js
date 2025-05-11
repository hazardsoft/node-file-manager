import { createReadStream, read } from "node:fs";
import { pipeline } from "node:stream/promises";
import { getPath } from "../utils.js";

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    return new Promise(resolve => {
        const filePath = getPath(args[0])
        const readable = createReadStream(filePath);
        readable.pipe(process.stdout);
        readable.on('end', () => {
            process.stdout.write('\n');
            readable.close();
            resolve();
        })
    })
}

export default {validate, execute}