const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const async = require('async');
const query = require('./database');
const jsonParser = bodyParser.json();
const admin = require('./management');

//Get User's Projects or Register Him
router.get('/api/:userId', (req,res)=>{
  let userId = req.params.userId;
  query('select exists (select userid from users where userid=?) as total', [userId]).then((data)=>{
    if(data[0].total){
    query('select projects.project, tasks.task, tasks.status, users.name from projects left join tasks on projects.id_project = tasks.id_project left join users on projects.id_author = users.id_user where users.userid=?', [userId]).then(data=>{
      const array = [];
      data.forEach((el,i,arr)=>{
        let index = array.findIndex(obj=>obj.title == el.project);
        if(index < 0){
          let newObj = {};
          if(el.task){
          newObj = {
            title: el.project,
            arrayTask: [{
              text: el.task, done: new Boolean(el.status)
            }]
          }
          }else{
            newObj = {
              title: el.project,
              arrayTask: []
            }
          }
          array.push(newObj);
        }
        else{
          array[index].arrayTask.push({text: el.task, done: new Boolean(el.status)});
        }
      });
        console.log(data);
        res.send(array);
    });
    }
    else{
      admin.auth().getUser(userId).then(mainData=>{
        query('insert into users (name, email, userid) values (?, ?, ?)', [mainData.displayName, mainData.email, mainData.uid]).then(data=>{
          res.status(200).send([]);
        }).catch(err=>{
          res.status(400).send(err);
        })
      }).catch(err=>res.status(400).send(err));
    }
  }).catch(err=>res.sendStatus(500));
});

//Create a New Project 
router.post('/api/project', jsonParser, (req,res)=>{
  if(!req.body) return res.send(400);
  const userId = req.body.name;
  console.log('Post in;');
  query('insert into projects SET id_author = (select id_user from users where userid=?), project = ?', [userId,req.body.project]).then(data=>{
    res.sendStatus(200);
  }).catch(err=>res.send(400, err));
});

//Create a New Task
router.post('/api/task', jsonParser, (req, res)=>{
  const userId = req.body.name;
  const projectName = req.body.project;
  const taskName = req.body.task;
  query('insert into tasks SET id_project = (select id_project from projects right join users on projects.id_author = users.id_user where users.userid=? and project=?), task = ?', [userId, projectName, taskName]).then(data=>{
    res.sendStatus(200);
  }).catch(err=>res.status(400).send(err));
});

//Delete a Project
router.delete('/api/:userId/project/:projectName', (req, res)=>{
  const userId = req.params.userId;
  const projectName = req.params.projectName;
  query('delete from projects where project = ? and id_author = (select id_user from users where userid = ?)', [projectName, userId]).then(data=>{
    res.sendStatus(200);
  }).catch(err=>res.send(400, err));
})

//Delete a Task
router.delete('/api/:userId/project/:projectName/task/:taskName', (req,res)=>{
  const userId = req.params.userId;
  const projectName = req.params.projectName;
  const taskName = req.params.taskName;
  query('delete from tasks where task = ? and id_project = (select id_project from projects right join users on projects.id_author = users.id_user where users.userid=? and project=?)', [taskName, userId, projectName]).then(data=>{
    res.sendStatus(200);
  }).catch(err=>res.status(500).send(err));
});

//Update Project Name
router.put('/api/project/update', jsonParser, (req,res)=>{
  // if(!req.body) return res.send(400);
  const userId = req.body.name;
  const projectName = req.body.projectName;
  const bodyReq = req.body;
  query('update projects set project = ? where project = ? and id_author = (select id_user from users where userid = ?)', [req.body.project, projectName, userId]).then(data=>{
    if(!data.affectedRows){
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  }).catch(err=>res.status(400).send(err));
});

//Update Task Name
router.put('/api/task/update', jsonParser, (req,res)=>{
  const userId = req.body.name
  const projectName = req.body.project;
  const taskName = req.body.taskName;
  query('update tasks set task = ? where task = ? and id_project = (select id_project from projects right join users on projects.id_author = users.id_user where users.userid=? and project=?)', [req.body.task, taskName, userId, projectName]).then(data=>{
    if(!data.affectedRows){
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  }).catch(err=>res.status(400).send(err));
});

//Toggle checkbox
router.put('/api/toggle', jsonParser, (req, res)=>{
  const userId = req.body.name;
  const projectName = req.body.project;
  const taskName = req.body.task;
  let bodyCheck = req.body.status ? 1 : 0;
  query('update tasks set status = ? where task = ? and id_project = (select id_project from projects right join users on projects.id_author = users.id_user where users.userid=? and project=?)', [bodyCheck, taskName, userId, projectName]).then(data=>{
    if(!data.affectedRows){
      return res.sendStatus(400);
    }
    res.sendStatus(200);
  }).catch(err=>res.status(400).send(err));
});

module.exports = router;