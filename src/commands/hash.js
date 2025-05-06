import {createReadStream} from "fs"
import {createHash} from "crypto"
import { getPath } from "../utils.js";
import { pipeline } from "stream/promises";

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    const filePath = getPath(args[0])
    const readable = createReadStream(filePath)
    const hash = createHash("sha256");
    await pipeline(readable, hash);
    console.log(hash.digest("hex"))
}

export default {validate, execute}