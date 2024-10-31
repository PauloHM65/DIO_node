import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controllers/podcast_controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http_methods";
import { StatusCode } from "./utils/status_code";



export const app = async(request: http.IncomingMessage, response:http.ServerResponse)=>{   
    //querystring
    //https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJZmxvdyBjYnVt
    const baseUrl= request.url?.split("?")[0];
    // ?? = || (ou)

    //lista de videos de podcast
    if(request.method == HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes( request,response);
    }
    //lista de videos de determinado podcast com querystring
    else if(request.method == HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilterEpisodes(request, response);
    }else{
        response.writeHead(StatusCode.NOT_FOUND,{'content-type': "application/json"});
        response.write("Route not found");
        response.end();
    }
    
}