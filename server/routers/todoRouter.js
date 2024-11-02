import { Router } from 'express'
import { auth } from '../helper/auth.js'
import { getTasks, postTask, deleteTask } from '../controllers/TaskController.js'

const todoRouter = Router()

todoRouter.get('/', getTasks)

todoRouter.post('/create', auth, postTask)

todoRouter.delete('/delete/:id', auth, deleteTask)

// todoRouter.post('/create', auth, (req, res, next) => {
//     pool.query('INSERT INTO task (description) VALUES ($1) returning *',
//         [req.body.description],
//         (error, result) => {
//             if (error) {
//                 return next(error)
//             }
//             return res.status(200).json({id: result.rows[0].id})
//         }
//     )
// })

// todoRouter.delete('/delete/:id', auth, (req, res, next) => {
//     const id = parseInt(req.params.id)
    
//     pool.query('DELETE FROM task WHERE id = $1',
//         [id],
//         (error, result) => {
//             if (error) {
//                 return next(error)
//             }
//             return res.status(200).json({id: id})
//         }
//     )
// })


export { todoRouter }