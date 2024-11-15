import { playerModel } from "../../models/player_model";
import { statisticsModel } from "../../models/statistics_model";
import * as playerRepository from "../../repositores/players_repoitory";
import * as httpResponse from "../../utils/http-helper";

export const getPlayersService = async ()=>{
    const data = await playerRepository.findAllPlayers();
    let response = null
    if(data){
        response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }
    
    return response;
}
export const getPlayerByIDService = async (id:number)=>{
    const data = await playerRepository.findPlayersByID(id);

    let response = null
    if(data){
        response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }
    
    return response;
}


export const criatePlayersService = async (player: playerModel )=>{
    
    let response = null
    if(Object.keys(player).length != 0){
        await playerRepository.insertPlayer (player)
        
        response = await httpResponse.created(player)

    }else{
        response = await httpResponse.badRequest()
    }
    
    
    return response;
}

export const deletePlayerService = async(id: number) =>{
    let response = null
    let isDeleted = null
    isDeleted = await playerRepository.deletePlayer(id);
    if(isDeleted){
        response = httpResponse.ok({message: "deleted"})
    }else{
        response = httpResponse.badRequest()
    }
    
    
    
    return response;
}

export const updatePlayerService = async(id: number, statistic: statisticsModel) =>{
    let response = null
    let data = null;
    
    data = await playerRepository.updatePlayer(id,statistic)
    if(data){
        response =  httpResponse.ok({message: `Player : ${data.name}, atualizado`})
    }else{
        response =  httpResponse.badRequest()
    }
    
    
    return response;
}
