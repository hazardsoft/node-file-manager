const parseArgs = () => {
    const args = process.argv.slice(2);

    const argsPairs = new Map()
    for (let i = 0; i < args.length; i ++) {
        const pairs = args[i].split("=")
        argsPairs.set(pairs[0].slice(2), pairs[1])
    }
    return argsPairs;
};

const args = parseArgs();

export const readArg = (key) => {
    return args.get(key) ?? "";
}