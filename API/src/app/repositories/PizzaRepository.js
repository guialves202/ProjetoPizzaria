import pizzaDB from "../database/connection.js";

class PizzaRepository {

    findAll() {
        const sql = 'SELECT * FROM sabores where id = 2';
        return pizzaDB.doQuery(sql);
    }

    create(bordaID,massaID,saboresID) {
        const pizza = {
            borda_id: bordaID,
            massa_id: massaID
        }

        const pizzaJSON = JSON.stringify(pizza);

        const salvaPizza = new Promise((resolve,reject) => {
            pizzaDB.connection.query('INSERT INTO pizzas SET ?', pizzaJSON, (err,resultado) => {
                if(err) return reject(console.log(err));
                const jsonResult = JSON.parse(JSON.stringify(resultado));
                return resolve(jsonResult);
            })
        })

        const ultimaPizza = new Promise((resolve,reject) => {
            pizzaDB.connection.query('SELECT id FROM pizzas ORDER BY id DESC limit 1', (err,resultado) => {
                if(err) return reject(console.log(err));
                const jsonResult = JSON.parse(JSON.stringify(resultado));
                return resolve(jsonResult);
            })
        })

        // vai ter que virar um array de objetos com um for criando um objeto com a pizza_id e o sabor_id pra cada sabor recebido
        const pizzaSabor = {
            pizza_id: ultimaPizza,
            sabor_id: saboresID
        }
        const pizzaSaborJSON = JSON.stringify(pizzaSabor);
        
        const salvaSabores = new Promise((resolve,reject) => {
            pizzaDB.connection.query('INSERT INTO pizza_sabor SET ?', pizzaJSON, (err,resultado) => {
                if(err) return reject(console.log(err));
                const jsonResult = JSON.parse(JSON.stringify(resultado));
                return resolve(jsonResult);
            })
        })
    }

    update() {

    }

    delete() {

    }

}

export default new PizzaRepository;