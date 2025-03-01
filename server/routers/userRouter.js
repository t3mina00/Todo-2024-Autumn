import { Router } from 'express'
import { postRegistration, postLogin } from '../controllers/UserController.js'

const userRouter = Router()

userRouter.post('/register', postRegistration)

userRouter.post('/login', postLogin)

// userRouter.post('/register', async (req, res, next) => {
//     hash(req.body.password, 10, (error, hashedPassword) => {
//         if (error) {
//             return next(error)
//         }

//         try {
//             pool.query('INSERT INTO account (email, password) VALUES ($1, $2) returning *',
//                 [req.body.email, hashedPassword],
//                 (error, result) => {
//                     if (error) {
//                         return next(error)
//                     }
//                     return res.status(201).json({id: result.rows[0].id, email: result.rows[0].email})
//                 }
//             )
//         } catch (error) {
//             return next(error)
//         }
//     })
// })

// userRouter.post('/login', (req, res, next) => {
//     const invalid_message = 'Invalid credentials.'
//     try {
//         pool.query('SELECT * FROM account WHERE email = $1',
//             [req.body.email],
//             (error, result) => {
//                 if (error) next(error)
//                 if (result.rowCount === 0) return next(new Error(invalid_message))
//                     compare(req.body.password, result.rows[0].password, (error, match) => {
//                         if (error) return next(error)
//                         if (!match) return next(new Error(invalid_message))
//                         const token = sign({user: req.body.email}, process.env.JWT_SECRET_KEY)
//                         const user = result.rows[0]
//                         return res.status(200).json(
//                             {
//                                 'id': user.id,
//                                 'email': user.email,
//                                 'token': token
//                             }
//                         )
//                     })
//         })
//     } catch (error) {
//         return next(error)
//     }
// })

export { userRouter }