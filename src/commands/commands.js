import up from "./up.js"

const commands = {
    "up": up
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