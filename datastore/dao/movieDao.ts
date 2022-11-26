import {MovieType} from '../../types'

export interface MovieDao {
  creatMovie(movie: MovieType): Promise<void>
  getAllMovies(): Promise<MovieType[]>
  getMovieById(id: string): Promise<MovieType | undefined>
  getMovieByTitle(title: string): Promise<MovieType | undefined>
  updateMovie(movie: MovieType): Promise<void>
  deleteMovie(id: string): Promise<void>
}
