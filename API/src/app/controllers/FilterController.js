import PizzaController from "./PizzaController.js";

class FilterController {

    async index(req, res) {
        const filter = await createFilter(req, res);
        if(filter.filters) {
            filter.newRows = verifyFilter(filter)
            res.json(filter.newRows);
        }
    }
}

async function createFilter(req, res) {
    return {
        rows: await PizzaController.index(req, res),
        filters: req.body,
        newRows: []
    }
}

function pedidoFilter(rows, filters) {
    if(filters.pedido_id.length > 0) {
        return rows.filter(pizza => pizza.pedido_id == filters.pedido_id);
    }
}

function verifyFilter(filter) {
    const filters = filter.filters;
    const rows = filter.rows;
    for(const key in filters) {
        switch(key) {
            case 'pedido_id':
                if(filters[key].length > 0) {
                    filter.newRows = filter.newRows.concat(pedidoFilter(rows, filters));
                }
                break;
            case 'tipo_borda':
            case 'tipo_massa':
            case 'status':
            case 'sabor':
                if(filter.filters[key].length > 0) {
                    filter.newRows = filter.newRows.concat(filterRows(key, filter));
                }
                break;
            case 'qntSabor':
                if(filters[key].length > 0) {
                    for(let i = 0; i < filters[key].length; i++) {
                        filter.newRows = filter.newRows.concat(filter.rows.filter(pizza => {
                            const qntSabor = pizza.sabor.split(',').length;
                            return qntSabor == filters[key][i] && !filter.newRows.includes(pizza);
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
            case 'limit':
                console.log(filters[key]);
                if(filters[key] != 0) {
                    console.log('entrou');
                    if(filter.newRows.length > 0) {
                        filter.newRows = filter.newRows.slice(0, filters[key]);
                    } else {
                        filter.newRows = filter.rows.slice(0, filters[key]);
                    }
                }
                break;
            default:
                break;
        }
    }
    return filter.newRows;
}

function filterRows(key, filter) {
    let newRows = [];
    for(let i = 0; i < filter.filters[key].length; i++) {
        newRows = newRows.concat(filter.rows.filter(pizza => {
            return (pizza[key] == filter.filters[key][i] || String(pizza[key]).includes(filter.filters[key][i])) && !filter.newRows.includes(pizza)
        }))
    }
    return newRows;
}

export default new FilterController;