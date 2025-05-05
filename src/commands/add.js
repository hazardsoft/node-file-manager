import { getPath } from "../utils.js";
import { writeFile } from "node:fs/promises";

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    const filePath = getPath(args[0])
    await writeFile(filePath, "", {flag: "wx"})
}

export default {validate, execute}