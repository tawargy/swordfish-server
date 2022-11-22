import {Request,Response} from 'express'
import fs from 'fs'

export const videoStream=(req:Request,res:Response)=>{
  const id=req.params.id
  const path= '/home/tawargy/Videos/Elvis(2022)/Elvis.2022.720p.WEBRip.x264.AAC-[YTS.MX].mp4'

const range = req.headers.range
  if (!range) {
    res.status(400).send('range is require')
    return
  }
  const videoSize = fs.statSync(
path  ).size

  const CHUNK_ZISE = 10 ** 6
  const start = Number(range.replace(/\D/g, ''))
  const end = Math.min(start + CHUNK_ZISE, videoSize - 1)
  const contentLength = end - start + 1

  const headers = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Ranges': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  }

  res.writeHead(206, headers)
  const videoStream = fs.createReadStream(path, {start, end})

  videoStream.pipe(res)
}
