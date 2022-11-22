import express, {Express} from 'express'
import asyncHandler from 'express-async-handler'
import {updateMovies, updateShows} from './handlers/updateDB'

const app: Express = express()
app.get('/healthz', (req, res) => {
  res.status(200).send('everything is ok')
})

// update movies,shows DB
app.get('/updateMovies', asyncHandler(updateMovies))
app.get('/updateShows', asyncHandler(updateShows))

export default app
