import express from "express"
import { GetTimeController } from "./controllers/GetTimeController";
import { UpdateServerStatusController } from "./controllers/UpdateServerStatusController";
import {AcknowledgeAlarmsController} from "./controllers/AcknowledgeAlarmsController"
import { GetAlarmsWarningController, GetAlarmsRiskController } from "./controllers/GetAlarmsController";
import { CallUserController } from "./controllers/CallUserController";
import { FreeUserController } from "./controllers/FreeUserController";



import cors from "cors"


const app = express();
app.use(cors());


app.use(express.json());


app.get("/callUser", new CallUserController().handle);

app.get("/freeUser", new FreeUserController().handle);

app.get("/updateServerStatus", new UpdateServerStatusController().handle);

app.get("/acknowledge", new AcknowledgeAlarmsController().handle);

app.get("/alarmsWarning", new GetAlarmsWarningController().handle);

app.get("/alarmsRisk", new GetAlarmsRiskController().handle);

app.get("/getTime", new GetTimeController().handle);

{
    app.listen(4000, ()=>console.log('server is running on port: 4000'))
}

