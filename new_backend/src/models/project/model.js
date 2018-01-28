//import Joi from 'joi';
//import schema from './schema';
import Sequelize from 'sequelize';
import db from '../../db.js';
import User from '../user/model';
import Task from '../task/model';

const Project = db.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        notNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});

Project.hasMany(Task, {foreignKey: 'project_id', onDelete: 'cascade', as: 'ProjectTasks'});
// Project.belongsToMany(Task, {as: "tasks", through: "project_tasks", foreignKey: 'task_id', otherKey: "project_id"});

export default Project;