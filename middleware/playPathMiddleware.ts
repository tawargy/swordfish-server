import { Request, Response, NextFunction } from 'express';
import { db } from '../datastore';

export const playPathMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  console.log(id);
  if (!id) {
    return res.status(400).send('no movie');
  }
  const movie = await db.getMovieById(id);
  if (!movie) {
    return res.status(400).send('no movie');
  }
  const path = movie.dirPath;
  req.query.playPath = path;
  next();
};
