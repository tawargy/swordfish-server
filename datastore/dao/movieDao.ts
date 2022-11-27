import {MovieType} from '../../types'

export interface MovieDao {
  creatMovie(movie: MovieType): Promise<void>
  getAllMovies(): Promise<MovieType[]>
  getMovieById(id: string): Promise<MovieType | null>
  getMovieByTitle(title: string): Promise<MovieType | null>
  updateMovie(movie: MovieType): Promise<void>
  deleteMovie(id: string): Promise<void>
}
