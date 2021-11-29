import {Request, Response} from "express"
import ntpClient from 'react-native-ntp-client';

class GetTimeController{
    async handle(request: Request, response: Response){
        await ntpClient.getNetworkTime("pool.ntp.org", 123, async function(err, date) {
            if(err) {
                response.json(err);
                return;
            }
            response.json(date);
        });
    }
}

export {GetTimeController}