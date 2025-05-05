import path from "node:path"
import { chdir, cwd } from "node:process"

const validate = (args) => {
    return args.length === 1;
}

const execute = async (args) => {
    const curDir = cwd()
    const targetDir = args[0]
    const targetPath = path.isAbsolute(targetDir) ? targetDir : path.relative(curDir, targetDir);
    chdir(targetPath)
}

export default {validate, execute}