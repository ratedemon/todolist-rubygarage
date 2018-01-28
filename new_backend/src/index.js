import Koa from 'koa';
import logger from 'koa-morgan';
import env from 'dotenv';
import {routes, allowedMethods} from './router';
import cors from 'koa2-cors';
import serve from 'koa-static';

env.config();

const app = new Koa();
app.use(cors());
app.use(serve(__dirname + '/../dist'));
console.log(__dirname + '/../dist');
app.use(routes());

app.use(allowedMethods());

app.use(logger('tiny')).listen(process.env.PORT, ()=>{
  console.log(`Listening on port ${process.env.PORT}...`);
});