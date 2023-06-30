import PizzaRepository from "../repositories/PizzaRepository.js";

class PizzaController {

    async index(req,res) {
        const content = await PizzaRepository.findAll();
        res.json(content);
    }

    async store(req,res) {
        const body = req.body;
        const bodyContent = JSON.parse(JSON.stringify(body));

        const content = await PizzaRepository.create(bodyContent);
        res.json(content);
    }

    async update(req,res) {
        const content = await PizzaRepository.update();
        res.json(content);
    }

    async delete(req,res) {
        const content = await PizzaRepository.delete();
        res.json(content);
    }

}

export default new PizzaController;