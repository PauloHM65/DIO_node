import chalk, { chalkStderr } from "chalk"

const promptQRCODE = [
    {
        name : "link",
        description: chalk.yellow("Digite o link para gerar o QRCODE"),
    },
    {
        name : "type",
        description : chalk.yellow("Escolha entre o tipo de QRCODE: 1 - Normal / 2 - Terminal"),
        pattern: /^[1-2]+$/,
        message : chalk.red.italic("Escolha entre 1 e 2"),
        required : true
    }
]


export default promptQRCODE