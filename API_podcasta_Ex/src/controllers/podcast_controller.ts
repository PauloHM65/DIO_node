import {IncomingMessage, ServerResponse} from "http";
import {serviceListEpisodes} from '../services/list_episodes_service'
import { serviceFilterEpsidoes } from "../services/filter_episodes_service";
import { PodcastTransferModel } from "../models/podcast_transfer_model";



export const getListEpisodes = async (request:IncomingMessage, response:ServerResponse)=>{
    
    const content = await serviceListEpisodes();

    response.writeHead(content.statusCode,{'content-type': "application/json"}); 
    response.write(JSON.stringify(content.body));
    response.end();
};


export const getFilterEpisodes = async(request:IncomingMessage,response:ServerResponse)=>{
    
    const content: PodcastTransferModel = await serviceFilterEpsidoes(request.url);

    response.writeHead(content.statusCode,{'content-type': "application/json"});
    response.write(JSON.stringify(content.body));
    response.end();
}