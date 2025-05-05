import { chdir } from "node:process"
import { getPath } from "../utils.js";

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    const dirPath = getPath(args[0])
    chdir(dirPath)
}

export default {validate, execute}