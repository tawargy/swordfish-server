import mongoose from 'mongoose';
import { Datastore } from '..';
import { MovieType } from '../../types';
import Movie from './schema/movieSchema';

const DB = 'mongodb://localhost:27017/swordfish';

export class NoSqlDataStore implements Datastore {
  private db!: Object;
  public async openDb() {
    this.db = mongoose.connect(DB);
    return this;
  }

  async creatMovie(movie: MovieType): Promise<void> {
    await Movie.create(movie);
  }
  async getAllMovies(): Promise<MovieType[]> {
    const data = await Movie.find();
    return data;
  }
  async getMovieById(id: string): Promise<MovieType | null> {
    return await Movie.findById(id);
  }
  async getMovieByTitle(title: string): Promise<MovieType | null> {
    return await Movie.findOne({ title: title });
  }
  async updateMovie(movie: MovieType): Promise<void> {
    throw 'error';
  }
  async deleteMovie(id: string): Promise<void> {
    await Movie.findByIdAndDelete(id);
  }
}
