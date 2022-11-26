
import {SqlDataStore} from './sql'
import { MovieDao } from './dao/movieDao';

export interface Datastore extends MovieDao {}

export let db:Datastore;


export async function initDb(){
 db =await new SqlDataStore().openDb()  
} 
