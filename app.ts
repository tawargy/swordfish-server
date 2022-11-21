
import express from 'express';
import crawler from './crawler/crawler'

const app =express()
const dirPath= '/home/tawargy/Videos/'
crawler(dirPath).then(data=>console.log(data))

export default app;
