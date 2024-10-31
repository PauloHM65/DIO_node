import { PodcastModel } from "./podcasts_interface";

export interface PodcastTransferModel {
    statusCode : number
    body : PodcastModel[]
}