const FireStoreClient = require('../controllers/firestoreClient')

class FreeUserService{
    async free(){
        await FireStoreClient.saveByPath('servidor/calling', {user: false});
    }
}

export {FreeUserService}