/**
 * Created by rated on 20.02.2018.
 */
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../src/index';
import User from '../src/models/user/model';
import Project from '../src/models/project/model';
import db from '../src/db';
const should = chai.should();

chai.use(chaiHttp);

let token = '';

describe('User', () => {
    before('DB clear', (done) => {
        User.destroy({
            where: {
                email: "test@test.com"
            }
        }).then((res) => {
            done();
        }).catch(err => console.log("Error", err));
    });

    describe('/POST register user', () => {
        it('it should create a user', (done) => {
            const user = {
                name: "Test Test",
                email: "test@test.com",
                password: "123456"
            };
            chai.request(server).post('/register').send(user).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });

    describe('/POST login user', () => {
        it('it should login user', (done) => {
            const user = {
                email: "test@test.com",
                password: "123456"
            };
            chai.request(server).post('/login').send(user).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                res.body.token.should.be.a('string');
                token = res.body.token;
                done();
            });
        });
    });
});

describe('Project', () => {
    describe('/GET projects', () => {
        it('it should get user projects', (done) => {
            chai.request(server).get('/user-projects').set('Authorization', `Bearer ${token}`).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    let project_id = 0;
    describe('/POST project', () => {
        it('it should create a new project', (done) => {
            const project = {
                name: "Test Test"
            };
            chai.request(server).post('/project').set('Authorization', `Bearer ${token}`).send(project).end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('project');
                res.body.project.should.have.property('name').eql(project.name);
                res.body.project.should.have.property('id');
                res.body.project.should.have.property('user_id');
                project_id = res.body.project.id;
                done();
            });
        });
    });

    describe('/PUT project', () => {
        it('it should update a project', (done) => {
            const project = {
                name: "Test Test",
                project_id: project_id
            };
            chai.request(server).put('/project').set('Authorization', `Bearer ${token}`).send(project).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('/DELETE project', () => {
        it('it should remove project', (done) => {
            chai.request(server).del(`/project/${project_id}`).set('Authorization', `Bearer ${token}`).end((err, res) => {
                res.should.have.status(200);
                done();
            });
        });
    });
});

describe('Task', ()=>{
    let project_id = 0;
    let task_id = 0;
    before('Create test project', (done) => {
        Project.create({
            name: 'Test Project 1',
            user_id: db.literal(`(SELECT id FROM users WHERE email='test@test.com')`)
        }).then(res=>{
            project_id = res.id;
            done();
        }).catch(err=>console.log(err));
    });

    describe('/POST task', () => {
        it('it should create a task', (done) => {
            const task = {
                name: 'Test Task 1',
                project_id: project_id
            };
            chai.request(server).post('/task').set('Authorization', `Bearer ${token}`).send(task).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                task_id = res.body.id;
                done();
            });
        });
    });

    describe('/Put task', () => {
        it('it should update task name', (done) => {
            const task = {
                name: 'Updated Test Task 1.1',
                project_id: project_id,
                task_id: task_id
            };
            chai.request(server).put('/task').set('Authorization', `Bearer ${token}`).send(task).end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
        });

        it('it should toggle task status', (done)=>{
            const task = {
                status: true,
                project_id: project_id,
                task_id: task_id
            };
            chai.request(server).put('/task/status').set('Authorization', `Bearer ${token}`).send(task).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        });

        it('it should change task position', (done)=>{
            const task = {
                position: 2,
                project_id: project_id,
                task_id: task_id
            };
            chai.request(server).put('/task/position').set('Authorization', `Bearer ${token}`).send(task).end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        });
    });

    describe('/DELETE task', () => {
        it('it should delete the task', (done)=>{
            chai.request(server).del(`/project/${project_id}/task/${task_id}`).set('Authorization', `Bearer ${token}`).end((err, res)=>{
                res.should.have.status(200);
                done();
            });
        })
    });
});