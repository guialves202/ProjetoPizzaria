import PizzaRepository from "../repositories/PizzaRepository.js";

class PizzaController {

    async index(req,res) {
        const content = await PizzaRepository.findAll();
        res.json(content);
    }

    async store(req,res) {
        const content = await PizzaRepository.create();
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