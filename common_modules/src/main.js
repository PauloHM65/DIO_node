const  p = require("./service/products")
const config = require("./service/config")

async function main() {
    console.log("Ola meu nome e systema")
    p.getFullName("408", "mousepad")
    p.getPruduct("mouse")

    console.log(config.production)
    console.log(config.client.device)
}


main();