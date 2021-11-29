const FireStoreClient = require('../controllers/firestoreClient')

class CallUserService{
    async call(){
        await FireStoreClient.saveByPath('servidor/calling', {user: true});
    }
}

export {CallUserService}