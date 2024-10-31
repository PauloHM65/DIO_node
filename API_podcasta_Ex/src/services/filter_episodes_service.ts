import { repositoryPodcast } from "../repositores/podcasts_repository";
import { PodcastTransferModel } from "../models/podcast_transfer_model";
import { StatusCode } from "../utils/status_code";

export const serviceFilterEpsidoes = async (podcstName: string | undefined): Promise<PodcastTransferModel> => {
    //querystring-exemplo -> https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJZmxvdyBjYnVt
    //console.log(podcstName)

    //pega o conteudo
    const queryString = podcstName?.split("?p=")[1] || "";

    //define interface d eretorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };
    if (queryString) {
        const data = await repositoryPodcast(`${queryString}`)

        //verifica o conteudo
        responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT
        responseFormat.body = data;
    }else{
        responseFormat.statusCode = StatusCode.BAD_REQUEST
    }




    return responseFormat;
}