import {Request, Response} from "express"
const FireStoreClient = require('../controllers/firestoreClient')



class GetAlarmsWarningController{
    async handle(request: Request, response: Response){
        const warning = await FireStoreClient.getByPath("Usuario_A/Limites_Alerta");
        response.json(warning)
       
    }
}

class GetAlarmsRiskController{
    async handle(request: Request, response: Response){
       const alert =  await FireStoreClient.getByPath("Usuario_A/Limites_Risco")
       response.json(alert)
    }
}
export {GetAlarmsWarningController, GetAlarmsRiskController}