import {Environment} from './env';

export const ProdEnvironment : Environment= {
    db_url: 'mongodb://mamtayadav:mamta@dbcluster-shard-00-00.wkttw.mongodb.net:27017,dbcluster-shard-00-01.wkttw.mongodb.net:27017,dbcluster-shard-00-02.wkttw.mongodb.net:27017/facebook?authSource=admin&replicaSet=atlas-e4x55a-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true',
    jwt_secret: 'Secret'
};
