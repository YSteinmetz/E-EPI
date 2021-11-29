import {Request, Response} from "express"
import { FreeUserService } from "../services/FreeUserService"


class FreeUserController{
    async handle(request: Request, response: Response){
        new FreeUserService().free();
        response.json("User are leaving");
    }
}

export {FreeUserController}