import { Router } from "express";
import * as playerController from "./controllers/players_controller";
import * as clubsController from "./controllers/clubs_controller";


const router = Router()

router.get("/players", playerController.getPlayers)
router.post("/players", playerController.postPlayer)
router.get("/players/:id", playerController.getPlayerByID)
router.delete("/players/:id", playerController.deletePlayer)
router.patch("/players/:id", playerController.updatePlayer)

router.get("/clubs", clubsController.getClubs)

export default router;