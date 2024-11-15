import { Request,Response } from "express";
import * as servicePlayer from "../services/players/players_service";
import { statisticsModel } from "../models/statistics_model";
import { HttpResponseModel } from "../models/http_response_model";



export const getPlayers = async (req:Request,res:Response)=>{
    const HttpResponse = await servicePlayer.getPlayersService();
    
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}
export const getPlayerByID = async (req:Request,res:Response)=>{
    //parseInt achei params que nao sao apenas number. Like "43adda" return 43. Number() return only digit string
    const id = Number(req.params.id);
   
    const HttpResponse = await servicePlayer.getPlayerByIDService(id);
    
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}


export const postPlayer = async (req:Request,res:Response)=>{
    const bodyValue = req.body
    
    const HttpResponse = await servicePlayer.criatePlayersService(bodyValue);

    if(HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    }
}

export const deletePlayer = async (req:Request, res:Response) =>{
    const id = Number(req.params.id);
    const HttpResponse = await servicePlayer.deletePlayerService(id);
    
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

export const updatePlayer = async (req:Request, res:Response) =>{
    const id = Number(req.params.id);
    const bodyValue: statisticsModel = req.body;

    const HttpResponse = await servicePlayer.updatePlayerService(id,bodyValue);
    

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}

