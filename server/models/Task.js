const { Sequelize } = require('sequelize');
const db = require('../db/sequelize');
console.log(db)

const Task = db.define('Task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    completed: {
        type: Sequelize.BOOLEAN
    },
    title: {
        type: Sequelize.STRING
    }
});
module.exports = Task;
