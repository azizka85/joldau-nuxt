import express from 'express'
import category from './category'
import seeds from './db/seeds'  

const app = express()

app.use('/category', category)
app.use('/db/seeds', seeds)

export default app
