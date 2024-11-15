import { HttpResponseModel } from "../models/http_response_model"


export const ok = async (data:any): Promise<HttpResponseModel> =>{

    return {
        statusCode: 200,
        body: data
    }
}
export const noContent = async (): Promise<HttpResponseModel> =>{

    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async (): Promise<HttpResponseModel> =>{

    return {
        statusCode: 400,
        body: null
    }
}

export const created = async (data:any): Promise<HttpResponseModel> =>{

    return {
        statusCode: 201,
        body: data
    }
}
