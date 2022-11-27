import express, { Express } from 'express';
import asyncHandler from 'express-async-handler';
import { updateMovies, updateShows } from './handlers/updateDB';
import { videoStream } from './handlers/videoStream';
import { creatMovie, getAllMovies, getMovieById, getMovieByTitle } from './handlers/movieHandlers';
import { playPathMiddleware } from './middleware/playPathMiddleware';

const app: Express = express();

app.use((req, res, next) => {
  console.log('Query', req.query);
  console.log('Params', req.params);
  next();
});

app.get('/healthz', (req, res) => {
  res.status(200).send('everything is ok');
});

// update movies,shows DB
app.get('/updateMovies', asyncHandler(updateMovies));
app.get('/updateShows', asyncHandler(updateShows));

//test api
app.get('/', asyncHandler(getAllMovies));
app.get('/creatmovie', asyncHandler(creatMovie));
app.get('/movie/:id', asyncHandler(getMovieById));
app.get('/movie/', asyncHandler(getMovieByTitle));

// video streaming

app.get('/play/:id', playPathMiddleware, asyncHandler(videoStream));

export default app;
