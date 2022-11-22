import {Response,Request} from 'express'
import {dirCrawlerMoies,dirCrawlerShows} from '../dirCrawler/dirCrawler';


const dirMoviesPath='/home/tawargy/Videos/movies'
const dirShowsPathe='/home/tawargy/Videos/shows'

export const updateMovies=async(req:Request,res:Response)=>{
const data=await  dirCrawlerMoies(dirMoviesPath)
res.status(200).send(data)
}

export const updateShows=async(req:Request,res:Response)=>{
  const data= await dirCrawlerShows(dirShowsPathe)
  res.status(200).send(data)
}
