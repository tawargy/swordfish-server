
import express,{Express} from 'express';
//import dotenv from 'dotenv'
import crawler from './crawler/crawler'

const app:Express  =express()

//const dirPath= process.env.PATH
//if(!dirPath){
//  console.log('no')
//}else{
//console.log(dirPath)
////crawler(dirPath).then(data=>console.log(data))
//}


export default app;
