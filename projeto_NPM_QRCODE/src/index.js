import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import chalk from "chalk";
import createQRCODE from "./services/QRCODE/create-qrcode.js";
import createPassword from "./services/PASSWORD/create-password.js";



async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err){console.log(chalk.bgRed("Iniciação deu errada!"))
            return;
        }
        if(choose.select == 1){
            console.log(chalk.blueBright("Escolheu o QRCODE"))
            await createQRCODE()
        };
        if(choose.select == 2){
            console.log(chalk.blueBright("Escolheu o password"))
            await createPassword();
        }
    })

    prompt.start();
};

main();