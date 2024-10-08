import chalk from "chalk";
import qr from "qrcode-terminal";

async function handle(err, result) {
  if(err){
    console.log("error on aplication")
    return
  }  

  const isSmall = result.type == 2;

  qr.generate(result.link, {small : isSmall}, (qrcode)=>{
    console.log(chalk.green("QRCODE gerado com sucesso\n"))
    console.log(qrcode)
  })
}


export default handle