import express, {Request, Response} from "express";
import router from "./routes";
import cors from "cors";

function creatApp(){
    const app = express();

    app.use(express.json())
    app.use("/api", router)
    /*const corsOptions = {
        origin: "https//:www.paulo.com",
        methods: ["GET"]
    }
    app.use(cors(corsOptions))
    //controla quem pode acessar a api
    */
    app.use(cors());
    return app;
}

export default creatApp;


