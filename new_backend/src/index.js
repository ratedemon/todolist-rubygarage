import Koa from 'koa';
import logger from 'koa-morgan';
import env from 'dotenv';
import {routes, allowedMethods} from './router';

env.config();

const app = new Koa();
app.use(routes());

app.use(allowedMethods());

app.use(logger('tiny')).listen(process.env.PORT, ()=>{
  console.log(`Listening on port ${process.env.PORT}...`);
});