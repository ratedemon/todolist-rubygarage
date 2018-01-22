import Router from 'koa-router';
import User from './models/user/model';
import koaBody from 'koa-body';

const router = new Router();

router.use(koaBody());
router.post('/register', async ctx =>{
  console.log(ctx.request.body);
  try{
    const user = await User.create(ctx.request.body);
    console.log(user);
    ctx.body = user;
  }catch(e){
    console.log(e);
  }
});

export function routes(){
  return router.routes();
}
export function allowedMethods(){
  return router.allowedMethods();
}