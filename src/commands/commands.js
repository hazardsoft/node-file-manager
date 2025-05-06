import up from "./up.js"
import cd from "./cd.js"
import ls from "./ls.js"
import cat from "./cat.js"
import add from "./add.js"
import mkdir from "./mkdir.js"
import rn from "./rn.js"
import copy from "./copy.js"
import mv from "./mv.js"
import rm from "./rm.js"

const commands = {
    "up": up,
    "cd": cd,
    "ls": ls,
    "cat": cat,
    "add": add,
    "mkdir": mkdir,
    "rn": rn,
    "copy": copy,
    "mv": mv,
    "rm": rm
}

const getCommand = (name) => {
    return commands[name];
}

const getCommandName = (commandLine) => {
    return commandLine.includes(" ") ? commandLine.split(" ")[0] : commandLine;
}

const getCommandArgs = (commandLine, commandName) => {
    if (commandLine === commandName) return []
    return commandLine.slice(commandName.length + 1).split(" ")
}

export {getCommand, getCommandName, getCommandArgs};