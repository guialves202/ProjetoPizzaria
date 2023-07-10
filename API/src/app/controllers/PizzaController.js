import PizzaRepository from "../repositories/PizzaRepository.js";

class PizzaController {

    async index(req,res) {
        const content = await PizzaRepository.findAll(req.body);
        
        const objIDs = [];

        content.map(obj => {
            if(!objIDs.includes(obj.pizza_id)) {
                objIDs.push(obj.pizza_id);
            }
        })

        let rows = [];

        for(let id of objIDs) {
            content.map(obj => {
                if(obj.pizza_id === id) {
                    rows.push(obj);
                    id = false;
                }
            })
        }

        for(let object of rows) {
            content.map(obj => {
                if(object.pizza_id === obj.pizza_id && object.sabor != obj.sabor) {
                    object.sabor += ',' + obj.sabor;
                }
            })
        }
        
        res.json(rows);
    }

    async store(req,res) {
        const body = req.body;
        const bodyContent = JSON.parse(JSON.stringify(body));

        const content = await PizzaRepository.create(bodyContent);

        res.json(content);
    }

    async update(req,res) {
        const body = req.body;

        const content = await PizzaRepository.update(body);
        res.json(content)
    }

    async delete(req,res) {
        const body = req.body;

        const content = await PizzaRepository.delete(body.pedido_id);
        res.json(content);
    }

}

export default new PizzaController;