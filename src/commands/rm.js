import { getPath } from "../utils.js";
import { rm } from "node:fs/promises";

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    const sourceFilePath = getPath(args[0])
    await rm(sourceFilePath, {force: false})
}

export default {validate, execute}