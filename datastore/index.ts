import mongoose from 'mongoose';
import { NoSqlDataStore } from './nosql';
import { MovieDao } from './dao/movieDao';

export interface Datastore extends MovieDao {}

export let db: Datastore;

export async function initDb() {
  db = await new NoSqlDataStore().openDb();
}
