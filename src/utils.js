import path from "node:path";
import { cwd } from "node:process";

export const getPath = (filePath) => {
    return path.isAbsolute(filePath) ? filePath : path.relative(cwd(), filePath);
}