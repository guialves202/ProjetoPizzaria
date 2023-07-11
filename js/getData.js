const limitSelect = document.querySelector('#limit');
const orderSelect = document.querySelector('#ordenar');

orderSelect.addEventListener('change', () => {
    getOrders({order_by: orderSelect.options[orderSelect.selectedIndex].value})
})

function getFilterData(event) {
    event.preventDefault();
    const filters = {};
    const bordas = [];
    const massas = [];
    const sabores = [];
    const qntSabores = [];
    const status = [];
    const pedidoID = document.querySelector('#pedido-filter').value;
    if(pedidoID) {
        filters.pedido_id = pedidoID;
    }
    const inputs = document.querySelectorAll("#filter-form input[type='checkbox']");
    inputs.forEach((item) => {
        if(item.checked) {
            switch(item.value[0]){
                case '0':
                    bordas.push(item.value[1]);
                    break;
                case '1':
                    massas.push(item.value[1]);
                    break;
                case '2':
                    sabores.push(item.value[1]);
                    break;
                case '3':
                    qntSabores.push(item.value[1]);
                    break;
                case '4':
                    status.push(item.value[1]);
                    break;
                            
            }
        }
    })
    switch(true) {
        case bordas.length > 0:
            filters.borda_id = bordas;
            break;
        case massas.length > 0:
            filters.massa_id = massas;
            break;
        case sabores.length > 0:
            filters.sabor_id = sabores;
            break;
        case qntSabores.length > 0:
            filters.qntSabor = qntSabores;
            break;
        case status.length > 0:
            filters.status = status;
            break;
    }
    
    
    // filters.order_by = orderSelect.options[orderSelect.selectedIndex].value;
    // filters.limit = limitSelect.options[limitSelect.selectedIndex].value;
    console.log('filters: ', filters);
    getOrders(filters);
}

async function getOrders(filters) {
    if(filters) {
        const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            body: JSON.stringify(filters),
            headers: {
                "Content-Type": "application/json"
            }
        })
        showRows(await response.json());
    } else {
        const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
        showRows(await response.json());
    }
    
}

getOrders();


function createNode(elementType, type = '', content = '') {
    const element = document.createElement(elementType);
    if(type && content) addAttribute(element, type, content);
    return element;
}

function addAttribute(element, type, content) {
    element.setAttribute(type, content);
}

function append(parent, element) {
    parent.appendChild(element);
}

function createSelect(status) {
    const select = createNode('select');

    const option1 = createNode('option');
    option1.value = 1;
    option1.text = 'Em Produção';

    const option2 = createNode('option');
    option2.value = 2;
    option2.text = 'Em Entrega';

    const option3 = createNode('option');
    option3.value = 3;
    option3.text = 'Concluído';

    append(select, option1);
    append(select, option2);
    append(select, option3);

    select.value = status;

    return select;
}

function createButton(className, event) {
    const button = createNode('button');

    button.addEventListener('click', event);

    const span = createNode('span');
    const i = createNode('i', 'class', className);

    append(span, i);
    append(button, span);

    return button;
}

async function showRows(data) {
    const table = document.querySelector('#form-table');
    table.innerHTML = '';
    data.forEach(obj => {
        const tr = createNode('tr','class','row content-row');
        for(const key in obj) {
            switch (key) {
                case 'pedido_id':
                    const td1 = createNode('td', 'class', 'column1 column1-rows');
                    td1.textContent = obj[key];
                    append(tr, td1);
                    break;
    
                case 'tipo_borda':
                    const td2 = createNode('td', 'class', 'column2 column2-rows');
                    td2.textContent = obj[key];
                    append(tr, td2);
                    break;
    
                case 'tipo_massa':
                    const td3 = createNode('td', 'class', 'column3 column3-rows');
                    td3.textContent = obj[key];
                    append(tr, td3);
                    break;
                
                case 'sabor':
                    const td4 = createNode('td', 'class', 'column4 column4-rows');
                    const sabores = obj[key].split(',');
                    const ul = createNode('ul');
                    for(let i = 0; i < sabores.length; i++) {
                        const li = createNode('li');
                        li.textContent = sabores[i]
                        append(ul, li);
                    }
                    append(td4, ul);
                    append(tr, td4);
                    break;
    
                case 'status':
                    const td5 = createNode('td', 'class', 'column5 column5-rows');
                    const select = createSelect(obj[key]);
                    const button = createButton('fa-solid fa-arrows-rotate', updateStatus);
                    append(td5, select);
                    append(td5, button);
                    append(tr, td5)
                    break;
            }
        }
        const td6 = createNode('td', 'class', 'column6 column6-rows');
        const button = createButton('fa-solid fa-x', deleteOrder);
        append(td6, button);
        append(tr, td6);
        append(table,tr);
    });
    
    const close = document.querySelector('.close');
    close.click();

}


async function updateStatus(event) {

    event.preventDefault();
    
    const td = this.parentNode;
    const select = td.getElementsByTagName('select')[0];

    const tr = td.parentNode;
    const pedido = tr.querySelector('.column1');

    const data = [
        {status_id: select.value},
        pedido.textContent
    ]
    const insertData = JSON.stringify(data);

    const response = await fetch("http://localhost:3000/order", {
        method: "PUT",
        body: insertData,
        headers: {
            "Content-Type": "application/json"
        }
    })
}

async function deleteOrder(event) {
    
    event.preventDefault();
    const tr = this.parentNode.parentNode;
    const pedido = tr.querySelector('.column1');

    const data = {pedido_id: pedido.textContent}
    const insertData = JSON.stringify(data);

    const response = await fetch("http://localhost:3000/order", {
        method: "DELETE",
        body: insertData,
        headers: {
            "Content-Type": "application/json"
        }
    })
    tr.remove();
}


const messageDiv = document.querySelector('#message-div');
const statusFail = document.querySelector('.status.fail');
const statusSucess = document.querySelector('.status.sucess');
const deleteSucess = document.querySelector('.delete.sucess');
const deleteFail = document.querySelector('.delete.fail');

function alterMessage() {
    messageDiv.removeAttribute('class', 'disabled');
    messageDiv.setAttribute('class', 'sucess');
    statusSucess.removeAttribute('class', 'disabled');
}
