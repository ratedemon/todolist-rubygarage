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
        notNull: true,
        defaultValue: 0
    },
    project_id: {
        type: Sequelize.INTEGER,
        notNull: true,
        references: {
            model: Project,
            key: 'id',
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
    }
});


export default Task;