import { getPath } from "../utils.js";
import { rm } from "node:fs/promises";
import copy from "./copy.js";

const validate = (args) => {
    return args.length === 2;
}

const execute = async (args) => {
    await copy.execute(args);
    const sourceFilePath = getPath(args[0])
    await rm(sourceFilePath, {force: false})
}

export default {validate, execute}