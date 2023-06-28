import mysql from 'mysql2';

class DataBase {
    constructor(host,port,user,password,database){
        this.host = host;
        this.port = port;
        this.user = user;
        this.password = password;
        this.database = database;
    }

    makeConnection(){
        this.connection = mysql.createConnection({
            host: this.host,            
            port: this.port,            
            user: this.user,            
            password: this.password,            
            database: this.database,            

        })

        this.connection.connect((err) => {
            if(err) console.log(err);
        })
    }

    doQuery(sql) {
        return new Promise((resolve,reject) => {
            this.connection.query(sql, (err,resultado) => {
                if(err) return reject(console.log(err));
                const jsonResult = JSON.parse(JSON.stringify(resultado));
                return resolve(jsonResult);
            })
        })    
    }
}

const pizzaDB = new DataBase('localhost','3306','root','123546','pizzaria');
pizzaDB.makeConnection();

export default pizzaDB;
