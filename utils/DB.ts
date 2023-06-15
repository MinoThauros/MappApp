import * as SQLite from 'expo-sqlite';
import { Place } from '../models/places';

const db = SQLite.openDatabase('places.db');
//handle creation/opening of database

export function init() {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS places (
                    id INTEGER PRIMARY KEY NOT NULL, 
                    title TEXT NOT NULL, 
                    imageUri TEXT NOT NULL, 
                    address TEXT NOT NULL, 
                    lat REAL NOT NULL, 
                    lng REAL NOT NULL)`,
                [],//special values
                () => {
                    resolve(true);
                    return true
                    
                },
                (_, err) => {
                    reject(err);
                    return false;
                }
            );
        });
    });
}
//primary key is autoincremented by SQL
//real is a number

export const insertPlace= ({place}:{place:Place})=>{
    return new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                `INSERT INTO places (title,imageUri,address,lat,lng) VALUES (?,?,?,?,?)`,
                [
                    place.title,
                    place.imageUri,
                    place.address,
                    place.location.lat,
                    place.location.lng
                ],
                (_,result)=>{
                    resolve(result.insertId);
                    console.log(result);
                    return true;
                },
                (_,err)=>{
                    reject(err);
                    return false;
                }
            )
        })
    })
}

export const fetchAllPlaces=()=>{
    return new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM places',
                [],
                (_,result)=>{
                    resolve(result.rows._array as Place[]);
                    //return true;
                },
                (_,err)=>{
                    reject(err);
                    return false;
                }
            )
        })
    })

}

export const fetchPlaceById=({id}:{id:string})=>{
    return new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM places WHERE id=?',//? is a placeholder which is replaced by the second argument in the array
                [id],
                (_,result)=>{
                    resolve(result.rows._array[0] as Place);
                    //return true;
                },
                (_,err)=>{
                    reject(err);
                    return false;
                }
            )
        })
    })
}