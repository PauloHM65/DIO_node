import fs from "fs"
import path from "path"
import { PodcastModel } from "../models/podcasts_interface"




const pathData = path.join(__dirname, "../repositores/podcasts.json")

export const repositoryPodcast = async (podcastName?:string):Promise<PodcastModel[]>=> {

    const rawData = fs.readFileSync(pathData,"utf-8")
    let jsonfile = JSON.parse(rawData)

    if(podcastName){
        jsonfile = jsonfile.filter((podcast: PodcastModel)=> podcast.podcastName === podcastName)
    }

    return jsonfile;
}