import up from "./up.js"
import cd from "./cd.js"
import ls from "./ls.js"
import cat from "./cat.js"
import add from "./add.js"
import mkdir from "./mkdir.js"

const commands = {
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
    "add": add,
    "mkdir": mkdir
}

const getCommand = (name) => {
    return commands[name];
}

const getCommandName = (commandLine) => {
    return commandLine.includes(" ") ? commandLine.split(" ")[0] : commandLine;
}

const getCommandArgs = (commandLine) => {
    return commandLine.includes(" ") ? commandLine.split(" ")[1].split(" ") : [];
}

export {getCommand, getCommandName, getCommandArgs};