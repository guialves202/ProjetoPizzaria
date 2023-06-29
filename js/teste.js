const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
})

async function orderPizza() {
    const selectBorda = document.querySelector('#borda');
    const borda = selectBorda.options[selectBorda.selectedIndex].value;
    
    const selectMassa = document.querySelector('#massa');
    const massa = selectMassa.options[selectMassa.selectedIndex].value;
    
    const selectSabores = document.querySelector('#sabores');
    var sabores = [];
    for(let i = 0; i < selectSabores.options.length; i++) {
        if(selectSabores.options[i].selected) {
            sabores.push(selectSabores.options[i].value)
        }
    }
    
    const insertData = [borda,massa,sabores];

    console.log(JSON.stringify(insertData));

    // const response = await fetch("http://localhost:3000/order", {
    //     method: "POST",
    //     body: insertData,
    //     header: {
    //         "Content-type": "application/json"
    //     }
    // })

    // const data = await response.json();

    // console.log(data);

}