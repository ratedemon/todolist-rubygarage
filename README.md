# RubyGarage

Test project for RubyGarage. [Link](https://rubytodoapp.herokuapp.com/)

### Tech
###### Frontend
* [Angular 2/4](https://angular.io/) - Frontend
* [Angular CLI](https://github.com/angular/angular-cli) - tool for initialize, develop, scaffold and maintain Angular applications
* [Materialize](http://materializecss.com/) - CSS library

###### Backend
* [NodeJS](https://nodejs.org/en/) - Backend language
* [Koa 2](https://github.com/koajs/koa) - Middleware framework for Node.js
* [Postgresql](postgresql.org) - Relational database management system
* [Backpack](https://github.com/jaredpalmer/backpack) - Build system for Node.js.

#### SQL task

1. get all statuses, not repeating, alphabetically ordered
```sh
SELECT DISTINCT status FROM tasks ORDER BY status ASC;
```
2. get the count of all tasks in each project, order by tasks count descending
```sh
SELECT p.id, p.name, p.id as pid, COUNT(t.project_id) as total FROM projects as p LEFT JOIN tasks as t on t.project_id=p.id GROUP BY p.id ORDER BY total DESC;
```
3. get the count of all tasks in each project, order by projects names 
```sh
SELECT p.id, p.name as name, p.id as pid, COUNT(t.project_id) as total FROM projects as p LEFT JOIN tasks as t on t.project_id=p.id GROUP BY p.id ORDER BY name;
```
4. get the tasks for all projects having the name beginning with “N” letter
```sh
SELECT * FROM tasks WHERE name LIKE 'N%'
```

5. get the list of all projects containing the ‘a’ letter in the middle of the name, and show the tasks count near each project. Mention that there can exist projects without tasks and tasks with project_id=NULL 
```sh
SELECT p.id, p.name as name, p.id as user_id, COUNT(t.project_id) as total FROM projects as p LEFT JOIN tasks as t on t.project_id=p.id WHERE p.name LIKE '%a%' GROUP BY p.id ORDER BY name;
```

6. get the list of tasks with duplicate names. Order alphabetically 
```sh
SELECT name, COUNT(*) AS total FROM tasks GROUP BY name HAVING COUNT(name)>1 ORDER BY total
```

7. get the list of tasks having several exact matches of both name and status, from the project ‘Garage’. Order by matches count
```sh
SELECT t.name, COUNT(*) as total FROM tasks as t WHERE t.project_id = (SELECT id FROM projects WHERE name='Garage' LIMIT 1) GROUP BY t.name, t.status HAVING COUNT(name) > 1 ORDER BY total;
```

8. get the list of project names having more than 10 tasks in status ‘completed’. Order by project_id
```sh
SELECT p.id, p.name as name, p.id as pid, COUNT(t.project_id) as total, COUNT(t.status) as statuses FROM projects as p LEFT JOIN tasks as t on t.project_id=p.id WHERE t.status = 'completed' GROUP BY p.id HAVING COUNT(t.status) > 10 ORDER BY p.id;
```