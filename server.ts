import express from 'express';
import mongoose from 'mongoose'
import { json } from 'express';
import { itemRouter } from './routes/api/items'

const app = express()

app.use(json())

app.use(itemRouter)

mongoose.connect('./config/keys', {}, () => {
  console.log('connected to database')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000')
})