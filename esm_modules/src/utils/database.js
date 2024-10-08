
const databaseType = {
    userType: "admin",
    typeData : "datalocal"
}

async function connectToDataBase(dataName) {
    console.log(`conectdo ao banco ${dataName}`)
}


async function disconnectDataBase() {
    console.log("desconectando bano de dados")
}
// export default connectToDataBase;
//multi export:
export {
    connectToDataBase,
    disconnectDataBase,
    databaseType
}
