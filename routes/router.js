const express =require('express')
const jwtMiddleware = require('../middlewares/jwtMiddleware')


const userController = require('../controllers/userController')
const taskController =require('../controllers/taskContoller')
const router =new express.Router()

router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.post('/add-task',jwtMiddleware,taskController.addTaskController)

router.get('/all-task',jwtMiddleware,taskController.getAllTaskController)

router.put('/tasks/:id/edit-task',jwtMiddleware,taskController.updateTaskController)

router.delete('/tasks/:id/delete-task',jwtMiddleware,taskController.deleteTaskController)

module.exports = router
