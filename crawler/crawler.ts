import * as fs from 'fs/promises'
import * as path from 'path'
import { extname} from 'path'

type obj={directory_name:string,path:string}
// const dirPath = path.join(__dirname, '../../..','Videos');
//const dirPath= '/home/tawargy/Videos/'

const crawler =async (path:string,name?:string|null):Promise<Object[]> => {
  let arr:Object[] = []

  const items =await fs.readdir(path, {withFileTypes: true}) 
  for (let item of items) {
    const itemPath = `${path}${item.name}/`
    if (!item.isDirectory()) {
      const ext = extname(item.name)
      if(ext==='.mp4'||ext==='.avi'||ext==='.mkv'){
        arr.push({directory_name:name,path:itemPath})
      }
    } else {
      const sub=await crawler(itemPath,item.name);
      arr.push(...sub)
    
     }
  }

  return arr
}

export default crawler
