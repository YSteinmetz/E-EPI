import {Request, Response} from "express"
import { CallUserService } from "../services/CallUserService"


class CallUserController{
    async handle(request: Request, response: Response){
        new CallUserService().call();
        response.json("User are comming");
    }
}

export {CallUserController}