const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

async function orderPizza() {
    const selectBorda = document.querySelector('#borda');
    const borda_id = selectBorda.options[selectBorda.selectedIndex].value;
    
    const selectMassa = document.querySelector('#massa');
    const massa_id = selectMassa.options[selectMassa.selectedIndex].value;
    
    const selectSabores = document.querySelector('#sabores');
    let sabor_id = [];
    for(let i = 0; i < selectSabores.options.length; i++) {
        if(selectSabores.options[i].selected) {
            sabor_id.push(selectSabores.options[i].value)
        }
    }
    
    const data = {borda_id,massa_id,sabor_id};

    const insertData = JSON.stringify(data);

    console.log(insertData);

    const response = await fetch("http://localhost:3000/order", {
        method: "POST",
        body: insertData,
        headers: {
            "Content-Type": "application/json"
        }
    })

}
