import fastify from "fastify";
import cors from "@fastify/cors"


const server = fastify();
//CORS - Limita quem pode chamar sua API
server.register(cors, {
    origin: "*",
    methods: ["GET"]
})

server.get("/teams", async(resquest,response)=>{
    response.type("application/json").code(200)

    return [
        { "id": 1, "name": "Alfa Romeo" },
        { "id": 2, "name": "Alpine" },
        { "id": 3, "name": "Aston Martin" },
        { "id": 4, "name": "Ferrari" },
        { "id": 5, "name": "Haas" },
        { "id": 6, "name": "McLaren" },
        { "id": 7, "name": "Mercedes" },
        { "id": 8, "name": "Red Bull" },
        { "id": 9, "name": "Scuderia AlphaTauri" },
        { "id": 10, "name": "Williams" }
      ]
      
});


const drivers = [
    {id:1, name:"Max Verstappen", team: "RedBull"},
    {id:2, name:"Luiz Hamilton", team: "Mercedes"},
    {id:3, name:"Lando Norris", team: "McLaren"}
]

server.get("/drivers", async(resquest,response)=>{
    response.type("application/json").code(200)

    return drivers;
});



interface DriverParams{
    id: string

}
server.get<{Params: DriverParams }>("/drivers/:id", async(request,response)=>{
    const id = parseInt(request.params.id)
    const driver = drivers.find((d) => d.id === id)
    response.type("application/json").code(200)

    if(!driver){
        response.type("application/json").code(404);
        return {messaeg: "Driver not found"}
    }else{
        response.type("application/json").code(200);
        return {driver};
    }
    
});



server.listen({port:3333},()=>{
    console.log("Server init");
});