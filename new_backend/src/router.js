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
import {checkLogin, checkRegister, checkSecretCode, checkForgot} from './middleware/validators/user';
import {checkCreateProject, checkGetProject, checkDeleteProject, checkUpdateProject} from './middleware/validators/project';
import {checkChangePosition, checkChangeStatus, checkCreateTask, checkDeleteTask, checkUpdateTask} from './middleware/validators/task';

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

router.post('/register', checkRegister, UserController.register);
router.post('/login', checkLogin, UserController.login);
router.post('/forgot', checkForgot, UserController.forgot);
router.post('/secret-code', checkSecretCode, UserController.getSecretCode);
router.put('/change-password', verifyAuth, UserController.changePassword);

router.get('/user-projects', verifyAuth, checkGetProject, ProjectController.getProjectsWithTasks);
router.post('/project', verifyAuth, checkCreateProject, ProjectController.create);
router.put('/project', verifyAuth, checkUpdateProject, ProjectController.update);
router.delete('/project/:id', verifyAuth, checkDeleteProject, ProjectController.delete);

router.post('/task', verifyAuth, checkCreateTask, TaskController.create);
router.put('/task', verifyAuth, checkUpdateTask, TaskController.updateName);
router.put('/task/status', verifyAuth, checkChangeStatus, TaskController.changeStatus);
router.put('/task/position', verifyAuth, checkChangePosition, TaskController.changePosition);
router.delete('/project/:project_id/task/:task_id', verifyAuth, checkDeleteTask, TaskController.delete);

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