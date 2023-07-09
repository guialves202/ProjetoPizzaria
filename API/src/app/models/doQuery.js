import pizzaDB from "../database/connection.js";

export default function doQuery(sql,params='',msgReject) {
    return new Promise((resolve,reject) => {
        pizzaDB.connection.query(sql, params, (err,resultado) => {
            if(err) return reject(msgReject, err);
            const jsonResult = JSON.parse(JSON.stringify(resultado));
            return resolve(jsonResult);
        })
    })    
}