const express = require('express')
const router = new express.Router()
const Task = require('../models/Task')
console.log('Task model:', Task); 

// Get all todos
router.get('/todos', async (req, res) => {
    try { 
        let tasks = await Task.findAll({ attributes: ['id', 'title', 'completed']})
        console.log(tasks.length)
        res.status(200).json(tasks)
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// Add a new todo
router.post('/todos', async (req, res) => {
    console.log(req.body)
    const newTodo = { title: req.body.title, completed: false };
    console.log(newTodo)
    const task = await Task.create(newTodo)
    res.status(201).json(task);
});

// Mark a todo as completed
router.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    var task = await Task.findByPk(id)
    const oldVal = task.completed
    if(task == null) {
        res.status(404).json({ message: 'Todo not found' });
    } else {
        const newTask = await Task.update({ 
            completed: !oldVal }, {
                where: {
                    id: id
                }
            }
        )
        task.completed = !oldVal
        res.json(task);
    }
  });

  // Delete a task
  router.delete('/todos/:id', async (req, res) => {
    const { id } = req.params
    console.log(id)
    const task = await Task.findByPk(id)
    if(task == null) {
        res.status(404).json({ message: 'Todo not found' });
    } else {
        await Task.destroy({ 
            where: {
                id: id
            }
        })
        res.status(200).send()
    }
  })
  module.exports = router