const sequelize = require('./db/sequelize');
const Task = require('./models/Task');

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        console.log('Task model in test.js:', Task); // Debugging log

        await Task.sync();

        let tasks = await Task.findAll({ attributes: ['id', 'title', 'completed'] });
        console.log('Tasks:', tasks);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
