/*import connectToDataBase from "./utils/database.js"; // em ESM tem que especificar a xtenção do arquivo



connectToDataBase("myDataBase")*/

import * as dataBase from "./utils/database.js"
import { getDataFromApi } from "./utils/api.js"


dataBase.connectToDataBase("my-data")
dataBase.disconnectDataBase()
console.log(dataBase.databaseType.typeData)
getDataFromApi()