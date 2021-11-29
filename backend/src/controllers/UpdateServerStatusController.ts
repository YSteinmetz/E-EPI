import {Request, Response} from "express"
import { UpdateServerStatusService } from "../services/UpdateServerStatusService"

class UpdateServerStatusController{
    async handle(request: Request, response: Response){
        new UpdateServerStatusService().update();
        response.json("ok")
    }
}

export {UpdateServerStatusController}