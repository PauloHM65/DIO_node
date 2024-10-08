import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.black.bgGray("Chalks ativo"))

console.log(logSymbols.success, chalk.black.bgGreen("Servidos iniciado com sucesso"))
console.log(logSymbols.error, chalk.black.bgRed("Servidos nao iniciado"))
console.log(logSymbols.info, chalk.black.bgYellow("Servidos nao iniciado"))
console.log(logSymbols.warning, ("!!!!!!"))