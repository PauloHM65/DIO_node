import chalk from "chalk";
import handle from "./handle-password.js";

async function createPassword() {
    const password = await handle();
    console.log(chalk.green("Password gerada: "),chalk.white.bgBlack(password))
    

}




export default createPassword