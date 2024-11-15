
import * as clubsRepository from "../../repositores/clubs_repository";
import * as httpResponse from "../../utils/http-helper";

export const getCLubsService = async() =>{
    const data = await clubsRepository.findAllClubs();
    let response = null
    if(data){
        response = await httpResponse.ok(data);
    }else{
        response = await httpResponse.noContent();
    }
    
    return response;

    
    
    
    
    return response;
}