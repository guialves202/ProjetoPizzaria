import pizzaDB from "../database/connection.js";

class PizzaRepository {

    findAll() {
        const sql = 'SELECT * FROM sabores';
        return pizzaDB.doQuery(sql);
    }

    create(bordaID,massaID) {
        const sql = 'INSERT INTO pizzas SET ?'
        const sql2 = 'INSERT INTO pedidos SET ?'
    }

    update() {

    }

    delete() {

    }

}

export default new PizzaRepository;