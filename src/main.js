import { readArg } from "./args.js"
import * as readline from 'node:readline/promises';
import { stdin, stdout, cwd, chdir } from 'node:process';
import {homedir} from "node:os"

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

const handleCommand = async (command) => {
    return null
}