import { playerModel } from "../models/player_model";
import { statisticsModel } from "../models/statistics_model";
import fs from "fs/promises"




export const findAllPlayers = async (): Promise<playerModel[]> => {
  const data = await fs.readFile("./src/data/dataPlayers.json", "utf-8");
  const database: playerModel[] = JSON.parse(data)
  
  return database;
}
export const findPlayersByID = async (id: number): Promise<playerModel | undefined> => {
  const data = await fs.readFile("./src/data/dataPlayers.json", "utf-8");
  const database: playerModel[] = JSON.parse(data)

  return database.find((player) => player.id == id);
}

export const insertPlayer = async (player: playerModel) => {
  const data = await fs.readFile("./src/data/dataPlayers.json", "utf-8");
  const database: playerModel[] = JSON.parse(data)

  database.push(player);
}

export const deletePlayer = async (id: number) => {
  const data = await fs.readFile("./src/data/dataPlayers.json", "utf-8");
  const database: playerModel[] = JSON.parse(data)
  
  const index = database.findIndex(p => p.id === id)
  if (index !== -1) {
    database.splice(index, 1);
    return true
  } else {
    return false;
  }


}

export const updatePlayer = async (id: number, stats: statisticsModel): Promise<playerModel | null> => {
  const data = await fs.readFile("./src/data/dataPlayers.json", "utf-8");
  const database: playerModel[] = JSON.parse(data)

  let resp = null;
  const playerIndex = database.findIndex(player => player.id === id)
  if (playerIndex !== -1) {
    database[playerIndex].stats = stats;
    resp = database[playerIndex]
  }

  return resp;
}