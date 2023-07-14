async function getData() {
    const response = await fetch('http://localhost:3000/statistic');
    return await response.json();
}

async function getSaborMaisPedido() {
    const data = await getData();
    let max = 0;
    let sabor = '';
    data.map(obj => {
        if(obj.qntSabor > max) {
            max = obj.qntSabor;
        }
    })
    data.map(obj => {
        if(obj.qntSabor === max) {
            sabor += obj.tipo_sabor + ', ';
        }
    })
    showData(sabor);
}

getSaborMaisPedido();

function showData(sabor) {
    const saborResult = document.querySelector('#sabor-result');
    sabor = sabor.substring(0, sabor.length - 2);
    saborResult.textContent = sabor;
}