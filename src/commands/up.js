import path from "node:path"
import { chdir, cwd } from "node:process"
import { homedir } from "node:os"

const validate = (args) => {
    return !args.length;
}

const execute = async () => {
    const curDir = cwd()
    if (curDir === homedir()) return;
    const parentDir = path.join(curDir, "..")
    chdir(parentDir)
}

export default {validate, execute}