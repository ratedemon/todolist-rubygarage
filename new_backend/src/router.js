import Router from 'koa-router';
import User from './models/user/model';
import Project from './models/project/model';
import Task from './models/task/model';
import koaBody from 'koa-body';
import env from 'dotenv';
import verifyAuth from './middleware/authMiddleware';
import UserController from './controllers/user';
import ProjectController from './controllers/project';
import TaskController from './controllers/task';
import send from 'koa-send';

env.config();

const router = new Router();

router.use(koaBody());
if(!!process.env.DATABASE_URL){
    router.get('/', async ctx =>{
        ctx.status = 200;
        console.log(ctx);
        await send(ctx, __dirname + '/../dist/index.html');
    });
}

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/forgot', UserController.forgot);

router.get('/projects', verifyAuth, ProjectController.getProjectsWithTasks);
router.post('/project', verifyAuth, ProjectController.create);
router.put('/project', verifyAuth, ProjectController.update);
router.delete('/project/:id', verifyAuth, ProjectController.delete);

router.post('/task', verifyAuth, TaskController.create);
router.put('/task', verifyAuth, TaskController.updateName);
router.put('/task/status', verifyAuth, TaskController.changeStatus);
router.put('/task/position', verifyAuth, TaskController.changePosition);
router.delete('/project/:project_id/task/:task_id', verifyAuth, TaskController.delete);

if(!!process.env.DATABASE_URL) {
    router.all('/*', ctx => {
        ctx.redirect('/');
        ctx.status = 301;
    });
}

export function routes() {
    return router.routes();
}
export function allowedMethods() {
    return router.allowedMethods();
}