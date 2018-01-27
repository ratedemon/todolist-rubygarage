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

env.config();

const router = new Router();

router.use(koaBody());

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.post('/project', verifyAuth, ProjectController.create);
router.put('/project', verifyAuth, ProjectController.update);
router.delete('/project/:id', verifyAuth, ProjectController.delete);

router.post('/task', verifyAuth, TaskController.create);
router.put('/task', verifyAuth, TaskController.updateName);
router.put('/task/status', verifyAuth, TaskController.changeStatus);
router.put('/task/position', verifyAuth, TaskController.changePosition);
router.delete('/project/:project_id/task/:task_id', verifyAuth, TaskController.delete);

export function routes() {
    return router.routes();
}
export function allowedMethods() {
    return router.allowedMethods();
}