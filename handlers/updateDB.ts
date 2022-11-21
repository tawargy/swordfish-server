import {Response,Request} from 'express'
import {crawlerMoies,crawlerShows} from '../crawler/crawler';


const dirMoviesPath='/home/tawargy/Videos/movies'
const dirShowsPathe='/home/tawargy/Videos/shows'

export const updateMovies=async(req:Request,res:Response)=>{
const data=await  crawlerMoies(dirMoviesPath)
res.status(200).send(data)
}

export const updateShows=async(req:Request,res:Response)=>{
  const data= await crawlerShows(dirShowsPathe)
  res.status(200).send(data)
}
