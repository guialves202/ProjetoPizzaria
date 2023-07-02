import pizzaDB from "../database/connection.js";

class PizzaRepository {

    findAll() {
        const sql = 'SELECT pedidos.id AS pedido_id, pizzas.id AS pizza_id, bordas.tipo AS tipo_borda, massas.tipo AS tipo_massa, sabores.tipo AS sabor, status.id AS status FROM pedidos INNER JOIN pizzas ON pedidos.pizza_id = pizzas.id INNER JOIN massas ON pizzas.massa_id = massas.id INNER JOIN bordas ON pizzas.borda_id = bordas.id INNER JOIN pizza_sabor ON pizzas.id = pizza_sabor.pizza_id INNER JOIN sabores ON pizza_sabor.sabor_id = sabores.id INNER JOIN status ON pedidos.status_id = status.id ORDER BY pedidos.id DESC;';
        return pizzaDB.doQuery(sql,'Pedido não encontrado');
    }

    async create(content) {

        const pizza = {
            borda_id: content.borda_id,
            massa_id: content.massa_id
        }

        function salvaPizza() {
            return new Promise((resolve,reject) => {
                pizzaDB.connection.query('INSERT INTO pizzas SET ?', pizza, (err,resultado) => {
                    if(err) return reject(err);
                    const jsonResult = JSON.parse(JSON.stringify(resultado));
                    return resolve(jsonResult.insertId);
                })
            })
        }

        function salvaSabores(pizzaID) {
            return new Promise((resolve,reject) => {
                for(let i = 0; i < content.sabor_id.length; i++) {
                    const pizzaSabor = {
                        pizza_id: pizzaID,
                        sabor_id: content.sabor_id[i]
                    }
                    pizzaDB.connection.query('INSERT INTO pizza_sabor SET ?', pizzaSabor, (err,resultado) => {
                        if(err) return reject(err);
                        const jsonResult = JSON.parse(JSON.stringify(resultado));
                        return resolve(jsonResult);
                    })
                }
            })
        }

        function salvaPedido(pizzaID) {
            return new Promise((resolve,reject) => {
                const pedido = {
                    pizza_id: pizzaID,
                    status_id: 1
                }
                pizzaDB.connection.query('INSERT INTO pedidos SET ?', pedido, (err, resultado) => {
                    if(err) return reject(err);
                    const jsonResult = JSON.parse(JSON.stringify(resultado));
                    return resolve(jsonResult.insertId);
                })
            })
        }

        const pizzaCriada = await salvaPizza();
        await salvaSabores(await pizzaCriada);
        const pedidoID = await salvaPedido(await pizzaCriada);
        this.findAll(await pedidoID);
        return await pedidoID;

    }

    update() {
        return;
    }

    delete() {

    }

}

export default new PizzaRepository;