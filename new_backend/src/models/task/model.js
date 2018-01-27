//import Joi from 'joi';
//import schema from './schema';
import Sequelize from 'sequelize';
import db from '../../db.js';
import Project from '../project/model';

const Task = db.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        notNull: true
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    position: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    project_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Project,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});

export default Task;