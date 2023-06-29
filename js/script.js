// const pedidoRows = document.querySelectorAll('.column1-rows');
// const bordaRows = document.querySelectorAll('.column2-rows');
// const massaRows = document.querySelectorAll('.column3-rows');
// const saborRows = document.querySelectorAll('.column4-rows');



function orderPizza(){
    const borda = document.querySelector('#borda');
    console.log(borda.options[Selection.selectedIndex].value);
    // const response = await fetch('http://localhost:3000/orders', {
    //     method: 'POST',
    //     body: values,
    //     headers: {
    //         "Content-type": "application/json"
    //     }
    // })

    // const data = await response.json();

    // console.log(data);
}



// async function testeAPI() {
//     const response = await fetch('http://localhost:3000/orders');
//     const data = await response.json();
//     data.map((content) => {
//         pedidoRows[pedidoRows.length-1].textContent += Object.values(content);
//     })
// }