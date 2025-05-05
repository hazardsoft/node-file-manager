import { readArg } from "./args.js"
import * as readline from 'node:readline/promises';
import { stdin, stdout, cwd, chdir } from 'node:process';
import {homedir} from "node:os"
import { getCommand, getCommandArgs, getCommandName } from "./commands/commands.js";

const printCurrentWorkingDir = () => {
    console.log(`You are currently in ${cwd()}`)
}

const username = readArg('username')
console.log(`Welcome to the File Manager, ${username}!`)

const rl = readline.createInterface({ input: stdin, output: stdout });
chdir(homedir())
printCurrentWorkingDir()

rl.on('line', async (line) => {
    const command = line.trim();
    switch (command) {
        case ".exit":
            process.exit()
        default:
            await handleCommand(command)
            printCurrentWorkingDir()
    }
});
rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`)
})

const handleCommand = async (commandLine) => {
    const name = getCommandName(commandLine);
    const args = getCommandArgs(commandLine);
    const command = getCommand(name);
    if (!command || !command.validate(args)) {
        console.log("Invalid input")
        return;
    }
    try {
        await command.execute(args)
    } catch (e) {
        console.log("Operation failed")
    }
}