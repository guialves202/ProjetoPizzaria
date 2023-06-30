import pizzaDB from "../database/connection.js";

class PizzaRepository {

    findAll() {
        const sql = 'SELECT * FROM sabores WHERE id = 2';
        return pizzaDB.doQuery(sql);
    }

    create(content) {

        const pizza = {
            borda_id: content.borda_id,
            massa_id: content.massa_id
        }

        const salvaPizza = new Promise((resolve,reject) => {
            pizzaDB.connection.query('INSERT INTO pizzas SET ?', pizza, (err,resultado) => {
                if(err) return reject(err);
                const jsonResult = JSON.parse(JSON.stringify(resultado));
                return resolve(jsonResult);
            })
        })

        const ultimaPizza = new Promise((resolve,reject) => {
            pizzaDB.connection.query('SELECT id FROM pizzas ORDER BY id DESC limit 1', (err,resultado) => {
                if(err) return reject(err);
                const jsonResult = JSON.parse(JSON.stringify(resultado));
                return resolve(jsonResult[0].id);
            })
        })
        
        const salvaSabores = new Promise((resolve,reject) => {
            ultimaPizza.then((value) => {
                for(let i = 0; i < content.sabor_id.length; i++) {
                    const pizzaSabor = {
                        pizza_id: value,
                        sabor_id: content.sabor_id[i]
                    }
                    pizzaDB.connection.query('INSERT INTO pizza_sabor SET ?', pizzaSabor, (err,resultado) => {
                        if(err) return reject(err);
                        const jsonResult = JSON.parse(JSON.stringify(resultado));
                        return resolve(jsonResult);
                    })
                }
                
            })
            
        })

        const salvaPedido = new Promise((resolve,reject) => {
            ultimaPizza.then((value) => {
                const pedido = {
                    pizza_id: value,
                    status_id: 1
                }
                pizzaDB.connection.query('INSERT INTO pedidos SET ?', pedido, (err, resultado) => {
                    if(err) return reject(err);
                    const jsonResult = JSON.parse(JSON.stringify(resultado));
                    return resolve(jsonResult);
                })
            })
            
        })
    }

    update() {

    }

    delete() {

    }

}

export default new PizzaRepository;