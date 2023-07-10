import doQuery from "../models/doQuery.js";

class PizzaRepository {

    findAll(filters) {
        if(Object.values(filters).length > 0) {
            let sql2 = 'SELECT pedidos.id AS pedido_id, pizzas.id AS pizza_id, bordas.tipo AS tipo_borda, massas.tipo AS tipo_massa, sabores.tipo AS sabor, status.id AS status FROM pedidos INNER JOIN pizzas ON pedidos.pizza_id = pizzas.id INNER JOIN massas ON pizzas.massa_id = massas.id INNER JOIN bordas ON pizzas.borda_id = bordas.id INNER JOIN pizza_sabor ON pizzas.id = pizza_sabor.pizza_id INNER JOIN sabores ON pizza_sabor.sabor_id = sabores.id INNER JOIN status ON pedidos.status_id = status.id WHERE ';
            for(const key in filters) {
                switch(key) {
                    case 'pedido_id':
                        if(filters[key].length > 0) {
                            sql2 += `pedidos.id = ${filters[key]} AND `
                        }
                        break;
                    case 'borda_id':
                        if(filters[key].length > 0) {
                            for(const sabor of filters[key]) {
                                sql2 += `pizzas.borda_id = ${sabor} AND `
                            }  
                        }
                        break;
                    case 'massa_id':
                        if(filters[key].length > 0) {
                            for(const sabor of filters[key]) {
                                sql2 += `pizzas.massa_id = ${sabor} AND `
                            }  
                        }
                        break;
                    case 'sabor_id':
                        if(filters[key].length > 0) {
                            for(const sabor of filters[key]) {
                                sql2 += `pizza_sabor.sabor_id = ${sabor} AND `
                            }  
                        }
                        break;
                    case 'qntSabor':
                        break;
                    case 'status':
                        if(filters[key].length > 0) {
                            for(const sabor of filters[key]) {
                                sql2 += `pedidos.status_id = ${sabor} AND `
                            }  
                        }
                        break;
                    default:
                        break;
                }
            }
            const lastAnd = sql2.lastIndexOf('AND');
            const sql3 = sql2.substring(0, lastAnd) + ';';
            console.log(sql3);
            return doQuery(sql3,'Pedido não encontrado');
        }
        const sql = 'SELECT pedidos.id AS pedido_id, pizzas.id AS pizza_id, bordas.tipo AS tipo_borda, massas.tipo AS tipo_massa, sabores.tipo AS sabor, status.id AS status FROM pedidos INNER JOIN pizzas ON pedidos.pizza_id = pizzas.id INNER JOIN massas ON pizzas.massa_id = massas.id INNER JOIN bordas ON pizzas.borda_id = bordas.id INNER JOIN pizza_sabor ON pizzas.id = pizza_sabor.pizza_id INNER JOIN sabores ON pizza_sabor.sabor_id = sabores.id INNER JOIN status ON pedidos.status_id = status.id ORDER BY pedidos.id;';
        return doQuery(sql,'Pedido não encontrado');
    }

    async create(content) {

        const pizza = {
            borda_id: content.borda_id,
            massa_id: content.massa_id
        }

        function createSQL(table) {
            return `INSERT INTO ${table} SET ?`
        }

        const insertSQL = {
            pizzas: createSQL('pizzas'),
            pizza_sabor: createSQL('pizza_sabor'),
            pedidos: createSQL('pedidos')
        }

        const insertedPizza = await doQuery(insertSQL.pizzas, pizza, 'Não foi possível salvar a pizza');

        const pizzaID = insertedPizza.insertId;

        for(let i = 0; i < content.sabor_id.length; i++) {
            const pizzaSabor = {
                pizza_id: pizzaID,
                sabor_id: content.sabor_id[i]
            }
            doQuery(insertSQL.pizza_sabor, pizzaSabor, 'Não foi possível salvar o sabor');
        }

        const pedido = {
            pizza_id: pizzaID,
            status_id: 1
        }

        const insertedPedido = await doQuery(insertSQL.pedidos, pedido, 'Não foi possível salvar o pedido');

        return insertedPedido.insertId;

    }

    update(content) {
        const sql = 'UPDATE pedidos SET ? WHERE id = ?;'
        const statusID = content[0];
        const id = content[1];
        return doQuery(sql,[statusID,id],'Não foi possível atualizar');

    }

    async delete(pedidoID) {

        const sql = 'SELECT pizzas.id FROM pizzas INNER JOIN pedidos ON pedidos.pizza_id = pizzas.id WHERE pedidos.id = ?';

        const pizza = await doQuery(sql, pedidoID, 'Não foi possível encontrar a pizza');

        doQuery('DELETE FROM pedidos WHERE pizza_id = ?', pizza[0].id, 'Não foi possível deletar o pedido');
        doQuery('DELETE FROM pizza_sabor WHERE pizza_id = ?', pizza[0].id, 'Não foi possível deletar o sabor');
        doQuery('DELETE FROM pizzas WHERE id = ?', pizza[0].id, 'Não foi possível deletar a pizza');
        
    }

}

export default new PizzaRepository;