import * as express from 'express';
import * as mongoose from 'mongoose';
import UserRouter from './routers/UserRouter';
import bodyParser = require('body-parser');
import { env } from './environments/env';

export class Server {
    public app: express.Application = express();

    constructor() {
        this.setConfigurations();
        this.setRoutes();
        this.setMongodb();
        this.error404Handler();
        this.handleErrors();
    }

    setConfigurations() {
        
        this.configureBodyParser();
        //Jobs.runRequiredJobs();
    } 
    setMongodb() {
        const databaseUr1 = env().db_url

        mongoose.connect(databaseUr1)
             .then(() => {
                  console.log('mongodb is connected')
             })
   }

    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(express.json())
    }

    setRoutes() {
        this.app.use('/src/uploads', express.static('src/uploads'));
        this.app.use('/api/user', UserRouter);
       
    }

    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: 'Not Found',
                status_code: 404
            });
        })
    }

    handleErrors() {
        this.app.use((error:any, req:any, res:any, next:any) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something Went Wrong. Please Try Again',
                status_code: errorStatus
            })
        })
    }
}