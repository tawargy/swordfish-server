import dotenv from 'dotenv';
dotenv.config()
import app from './app'
import {initDb} from './datastore'

(async()=>{
  await initDb()

const PORT=process.env.PORT;
app.listen(PORT,()=>{
  console.log(`server is running on port: ${PORT}`)
})

})()

