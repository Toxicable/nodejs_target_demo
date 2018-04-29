import { bootstrap } from './server';
import { INestApplication } from '@nestjs/common';
import { INestExpressApplication } from '@nestjs/common/interfaces/nest-express-application.interface';

let app: INestApplication & INestExpressApplication

async function start() {
  if(app) {
    app.close();
  }
  app = await bootstrap();
}

start();

declare let module: any;

if (module.hot) {
  module.hot.accept('./server', () => {
    start();
  })
 }
