import {Request,Response} from 'express'

import{db} from '../datastore';
import { MovieType } from '../types';
export const movieHandlers=async(req:Request,res:Response)=>{
  const mov:MovieType={
    id:'1234',
    title:'Elvis',
    year:'2022',
    rated:'+18',
    genre:"drama",
    director:['somedirector'],
    writer:['somewriter','jhkjh'],
    actors:['tom hanks','another'],
    plot:'some.......etc',
    imdbRating:'8.0',
    imdbID:'3243fd543',
    dirPath:'/home/tawargy/Videos/',
    poster:'ghkjhjhkl.png',
    hero:'dssfdsf.jpg'
    
  }
await db.creatMovie(mov)

  res.status(200).send('ok')
}
