import { Schema, model } from 'mongoose';
import { MovieType } from '../../../types';

const MovieSchema = new Schema<MovieType>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true, unique: true },
  year: { type: String, required: true },
  rated: { type: String },
  genre: { type: String },
  director: [{ type: String }],
  writer: [{ type: String }],
  actors: [{ type: String }],
  plot: { type: String },
  imdbRating: { type: String },
  imdbID: { type: String },
  dirPath: { type: String },
  poster:{type:String},
  hero:{type:String},
});

const Movie = model('Movie', MovieSchema);
export default Movie;
