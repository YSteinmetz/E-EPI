import { api } from "./api"

const FireStoreClient = require('../controllers/firestoreClient')


class UpdateServerStatusService{
    async getTime(){
        return (await api.get("/getTime")).data
    }
    async update(){
        const time = {now: await this.getTime()}
        await FireStoreClient.saveByPath('servidor/status',time);
    }
}

export {UpdateServerStatusService}