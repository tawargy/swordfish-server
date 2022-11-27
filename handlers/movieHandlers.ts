import { Request, Response } from 'express';

import { db } from '../datastore';
import Movie from '../datastore/nosql/schema/movieSchema';
import { MovieType } from '../types';
export const creatMovie = async (req: Request, res: Response) => {
  const mov: MovieType = {
    id: '1234',
    title: 'Elvis',
    year: '2022',
    rated: '+18',
    genre: 'drama',
    director: ['somedirector'],
    writer: ['somewriter', 'jhkjh'],
    actors: ['tom hanks', 'another'],
    plot: 'some.......etc',
    imdbRating: '8.0',
    imdbID: '3243fd543',
    dirPath: '/home/tawargy/Videos/',
    poster: 'ghkjhjhkl.png',
    hero: 'dssfdsf.jpg',
  };
  await db.creatMovie(mov);

  res.status(200).send('ok');
};

export const getAllMovies = async (req: Request, res: Response) => {
  const data = await db.getAllMovies();
  res.status(200).send(data);
};
export const getMovieById = async (req: Request, res: Response) => {
  const data = await db.getMovieById(req.params.id);
  res.status(200).send(data);
};
export const getMovieByTitle = async (req: Request, res: Response) => {
  let title = req.query.title;

  if (!title || typeof title !== 'string') {
    return;
  } else {
    function capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const data = await db.getMovieByTitle(capitalizeFirstLetter(title));

    res.status(200).send(data);
  }
};
