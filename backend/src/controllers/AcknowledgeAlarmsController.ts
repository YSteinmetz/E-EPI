import {Request, Response} from "express"
import { AcknowledgeAlarmsService } from "../services/AcknowledgeAlarmsService";

class AcknowledgeAlarmsController{
    async handle(request: Request, response: Response){
        new AcknowledgeAlarmsService().clearAll();
        response.json("Alarms cleaned")
    }
}

export {AcknowledgeAlarmsController}