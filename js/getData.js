async function getOrders() {
    const response = await fetch('http://localhost:3000/orders')

}


const table = document.querySelector('#form-table');
const tr = document.createElement('tr');
tr.setAttribute('class','row content-row');

const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');
const td4 = document.createElement('td');
const td5 = document.createElement('td');
const td6 = document.createElement('td');

td1.textContent = '10';

td1.setAttribute('class','column1 column1-rows');
td2.setAttribute('class','column2 column2-rows');
td3.setAttribute('class','column3 column3-rows');
td4.setAttribute('class','column4 column4-rows');
td5.setAttribute('class','column5 column5-rows');
td6.setAttribute('class','column6 column6-rows');

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'Frango com Catupiry'

const select = document.createElement('select');
const option1 = document.createElement('option');
option1.value = 'Concluído';

const option2 = document.createElement('option');
option2.value = 'teste';
const option3 = document.createElement('option');

const button1 = document.createElement('button');
button1.setAttribute('type','submit');

const span1 = document.createElement('span');
const i1 = document.createElement('i');
i1.setAttribute('class','fa-solid fa-arrows-rotate');

const button2 = document.createElement('button');
button2.setAttribute('type','submit');

const span2 = document.createElement('span');
const i2 = document.createElement('i');
i2.setAttribute('class','fa-solid fa-x');

span2.appendChild(i2);
button2.appendChild(span2);
td6.appendChild(button2);

span1.appendChild(i1);
button1.appendChild(span1);
select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);

td5.appendChild(select);
td5.appendChild(button1);

ul.appendChild(li1);
td4.appendChild(ul);

tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
tr.appendChild(td4);
tr.appendChild(td5);
tr.appendChild(td6);
table.appendChild(tr);

// async function testeAPI() {
//     const response = await fetch('http://localhost:3000/orders');
//     const data = await response.json();
//     data.map((content) => {
//         pedidoRows[pedidoRows.length-1].textContent += Object.values(content);
//     })
// }
