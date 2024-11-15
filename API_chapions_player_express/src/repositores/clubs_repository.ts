import { clubsModel } from "../models/clubs_model";
import fs from "fs/promises"


  
export const findAllClubs = async ():Promise<clubsModel[]> =>{
    
    const data = await fs.readFile("./src/data/dataClubs.json", "utf-8");
    const databaseClubs: clubsModel[] = JSON.parse(data)
    return databaseClubs;
}