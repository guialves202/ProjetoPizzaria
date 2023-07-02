const table = document.querySelector('#form-table');

async function getOrders() {
    return (await fetch('http://localhost:3000/orders')).json()
}

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

function createSelect() {
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

const tr = createNode('tr');
tr.setAttribute('class','row content-row');

async function insertData() {
    const data = await getOrders();
    for(key in data) {
        switch (key) {
            case 'pedido_id':
                const td1 = createNode('td', 'class', 'column1 column1-rows');
                td1.textContent = data[key];
                append(tr, td1);
                break;

            case 'tipo_borda':
                const td2 = createNode('td', 'class', 'column2 column2-rows');
                td2.textContent = data[key];
                append(tr, td2);
                break;

            case 'tipo_massa':
                const td3 = createNode('td', 'class', 'column3 column3-rows');
                td3.textContent = data[key];
                append(tr, td3);
                break;
            
            case 'sabor':
                const td4 = createNode('td', 'class', 'column4 column4-rows');
                const sabores = data[key].split(',');
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
                const select = createSelect();
                const button = createButton('fa-solid fa-arrows-rotate', updateStatus);
                append(td5, select);
                append(td5, button);
                append(tr, td5)
                break;
        }
    }

    const td6 = createNode('td', 'class', 'column6 column6-rows');
    const button = createButton('fa-solid fa-x');
    append(td6, button);
    append(tr, td6);
    append(table,tr);

}

insertData();

async function updateStatus(event) {

    event.preventDefault();
    
    const td = this.parentNode;
    const select = td.getElementsByTagName('select')[0];

    const tr = td.parentNode;
    const pedido = tr.querySelector('.column1');

    const insertData = [select.value, pedido.textContent];
    console.log(insertData);

    const response = await fetch("http://localhost:3000/order", {
        method: "PUT",
        body: insertData,
        headers: {
            "Content-Type": "application/json"
        }
    })
}