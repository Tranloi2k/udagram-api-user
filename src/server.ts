import express from 'express';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';

import { V0MODELS } from './controllers/v0/model.index';
import { config } from './config/config';

const c = config.dev;
(async () => {
  await sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen
  
  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
    res.header("Access-Control-Allow-Origin", c.url);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE");
    next();
  });

  app.use('/api/v0/', IndexRouter)

  // Root URI call
  app.get( "/", async ( req: any, res: { send: (arg0: string) => void; } ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();