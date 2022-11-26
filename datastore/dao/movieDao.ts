import {Movie} from '../../types'

export interface MovieDao {
  creatMovie(movie: Movie): Promise<void>
  getAllMovies(): Promise<Movie[]>
  getMovieById(id: string): Promise<Movie | undefined>
  getMovieByTitle(title: string): Promise<Movie | undefined>
  updateMovie(movie: Movie): Promise<void>
  deleteMovie(id: string): Promise<void>
}
