import { Request,Response } from "express";
import * as serviceClub from "../services/clubs/clubs_services"


export const getClubs = async (req:Request,res:Response)=>{
    const HttpResponse = await serviceClub.getCLubsService();
    
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
}