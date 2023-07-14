import PizzaRepository from "../repositories/PizzaRepository.js";

class PizzaController {

    async index(req,res) {
        const filters = req.body;
        let newRows = [];
        const content = await PizzaRepository.findAll();
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
        if(filters) {
            for(const key in filters) {
                switch(key) {
                    case 'pedido_id':
                        if(filters[key].length > 0) {
                            newRows = newRows.concat(rows.filter(pizza => pizza.pedido_id == filters[key]))
                        }
                        break;
                    case 'borda_id':
                        if(filters[key].length > 0) {
                            for(let i = 0; i < filters[key].length; i++) {
                                newRows = newRows.concat(rows.filter(pizza => {
                                    if(pizza.tipo_borda === filters[key][i] && !newRows.includes(pizza)) {
                                        return true;
                                    };
                                }))
                            }
                        }
                        break;
                    case 'massa_id':
                        if(filters[key].length > 0) {
                            for(let i = 0; i < filters[key].length; i++) {
                                newRows = newRows.concat(rows.filter(pizza => {
                                    if(pizza.tipo_massa === filters[key][i] && !newRows.includes(pizza)) {
                                        return true;
                                    };
                                }))
                            }
                        }
                        break;
                    case 'sabor_id':
                        if(filters[key].length > 0) {
                            for(let i = 0; i < filters[key].length; i++) {
                                newRows = newRows.concat(rows.filter(pizza => {
                                    if(pizza.sabor.includes(filters[key][i]) && !newRows.includes(pizza)) {
                                        return true;
                                    };
                                }))
                            }
                        }
                        break;
                    case 'qntSabor':
                        if(filters[key].length > 0) {
                            for(let i = 0; i < filters[key].length; i++) {
                                newRows = newRows.concat(rows.filter(pizza => {
                                    const qntSabor = pizza.sabor.split(',').length;
                                    return qntSabor == filters[key][i] && !newRows.includes(pizza);
                                }))
                            }
                        }
                        break;
                    case 'status':
                        if(filters[key].length > 0) {
                            for(let i = 0; i < filters[key].length; i++) {
                                newRows = newRows.concat(rows.filter(pizza => {
                                    if(pizza.status == filters[key][i] && !newRows.includes(pizza)) {
                                        return true;
                                    };
                                }))
                            }
                        }
                        break;
                    case 'order_by':
                        // 1 - mais antigo
                        // 2 - mais recente
                        switch(filters[key]) {
                            case '1':
                                console.log(newRows);
                                for(const pizza in newRows) {
                                    console.log(pizza);
                                }
                                break;
                            case '2':
                                console.log('caso 2');
                                break;
                            default:
                                console.log('nada');
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        if(newRows.length > 0) {
            res.json(newRows);
        } else {
            res.json(rows);
        }
        
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

    async statistic(req, res) {
        const content = await PizzaRepository.statistic();
        res.json(content);
    }

}

export default new PizzaController;