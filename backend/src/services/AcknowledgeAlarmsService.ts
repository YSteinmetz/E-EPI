const FireStoreClient = require('../controllers/firestoreClient')

class AcknowledgeAlarmsService{
    async clearAll(){
        const Acknowledges = {
            Luminosidade: "0",
            Ruido: "0",
            Temperatura: "0",
            Vibracao: "0"
        }
        await FireStoreClient.saveByPath('Usuario_A/Limites_Alerta', Acknowledges);
        await FireStoreClient.saveByPath('Usuario_A/Limites_Risco', Acknowledges);
    }
}

export {AcknowledgeAlarmsService}