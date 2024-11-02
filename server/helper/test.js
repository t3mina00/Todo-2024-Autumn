import fs from 'fs'
import path from 'path'
import { pool } from './db.js'
import { hash } from 'bcrypt'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import jwt from 'jsonwebtoken'
const { sign } = jwt


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const initializeTestDb = () => {
    const sql = fs.readFileSync(path.resolve(__dirname, "../database.sql"), "utf8")
    pool.query(sql)
}

const insertTestUser = (email, password) => {
    hash(password, 10, (error, hashedPassword) => {
        pool.query('INSERT INTO account (email, password) VALUES ($1, $2)',
            [email, hashedPassword])
    })
}

const getToken = (email) => {
    return sign({user: email}, process.env.JWT_SECRET_KEY)
}

export { initializeTestDb, insertTestUser, getToken }