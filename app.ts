import express, {Express} from 'express'
import asyncHandler from 'express-async-handler'
import {updateMovies, updateShows} from './handlers/updateDB'
import {videoStream} from './handlers/videoStream'

const app: Express = express()
app.get('/healthz', (req, res) => {
  res.status(200).send('everything is ok')
})

// update movies,shows DB
app.get('/updateMovies', asyncHandler(updateMovies))
app.get('/updateShows', asyncHandler(updateShows))
// video streaming
app.get('/stream/:id',asyncHandler(videoStream))
export default app
