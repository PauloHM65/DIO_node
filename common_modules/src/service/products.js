async function getFullName(codeId, productName) {
    console.log("\n")
    console.log("product: " + codeId + " -- " + productName);
}


async function getPruduct(productName) {
    console.log("Product "+ productName)
}
module.exports = {
    getFullName,
    getPruduct
}