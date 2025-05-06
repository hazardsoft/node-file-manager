import os from "node:os"

const allowedArgs = ["EOL", "cpus", "homedir", "username", "architecture"]

const validate = (args) => {
    return args.length === 1 && allowedArgs.includes(args[0].replace("--", ""));
}

const execute = async (args) => {
    const command = args[0].replace("--", "")
    switch (command) {
        case "EOL":
            console.log(os.EOL);
            break;
        case "cpus":
            const cpus = os.cpus()
            console.log(`total CPUs: ${cpus.length}`)
            for (let i = 0; i < cpus.length; i++) {
                const cpu = cpus[i]
                console.log(`core #${i}: ${cpu.model}, speed ${cpu.speed}`)
            }
            break;
        case "homedir":
            console.log(os.homedir())
            break;
        case "username":
            console.log(os.userInfo().username)
            break;
        case "architecture":
            console.log(os.arch())
            break;
    }
}

export default {validate, execute}