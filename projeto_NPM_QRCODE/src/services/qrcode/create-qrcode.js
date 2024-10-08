import prompt from "prompt";
import promptQRCODE from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle-qrcode.js" 


async function createQRCODE() {
    prompt.get(promptQRCODE, handle)
    prompt.start()
}


export default createQRCODE